import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { axiosAprovaApi } from '../../config/http';
var Buffer = require('buffer/').Buffer
import * as ImagePicker from 'expo-image-picker';

const Informacoes = ({ route }) => {
  const navigation = useNavigation();
  const user = route.params.props;

  const [username, setUsername] = useState(user.userName);
  const [fullName, setFullName] = useState(user.nome);
  const [email, setEmail] = useState(user.email);
  const [birthdate, setBirthdate] = useState(() => {
    const date = new Date(user.dataNasc)

    let day = date.getUTCDate();
    let month = (date.getMonth() + 1);
    if (day < 10)
      day = "0" + day
    if (month < 10)
      month = "0" + month
    return `${day}${month}${date.getFullYear()}`
  });

  const [phoneNumber, setPhoneNumber] = useState(user.numCelular);
  const [selectedImage, setSelectedImage] = useState(null);

  function image() {
    if ((user.image != null || typeof user.image != 'undefined') && user.image?.img != null) {

      return `data:image/png;base64,${Buffer.from(user.image.img.data).toString('base64')}`
    } else {
      return `https://cdn-icons-png.flaticon.com/512/17/17004.png`
    }
  }

  const createFormData = (uri) => {
    const fileName = uri.split('/').pop();
    const formData = new FormData();
    const fileType = fileName.split('.').pop();
    formData.append('image', {
      name: fileName,
      uri: Platform.OS === 'ios' ? uri.replace('file://', '') : uri,
      type: `image/${fileType}`,

    });
    formData.append('name', fileName)
    return formData;
  };

  const pickImageAsync = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão da galeria');
        return;
      } else {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = async () => {
    // Verificação de dados antes de confirmar
    if (!username || !email || !birthdate || !phoneNumber) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    const isValidFullName = (name) => {
      return /^[a-zA-Z\s]*$/.test(name);
    };

    if (!isValidFullName(fullName)) {
      alert('Por favor, insira um nome válido.');
      return;
    }

    if (!/^[a-zA-Z]+$/.test(username)) {
      alert('O nome de usuário deve conter apenas letras.');
      return;
    }

    let imageId = null
    if (selectedImage != null) {
      const data = createFormData(selectedImage)
      console.log(data)

      await axiosAprovaApi.post('/images', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(async (r) => {
          imageId = r.data.savedID
          if ((user.image != undefined) || (user.image != null)) {
            await axiosAprovaApi.delete(`/images/${user.image._id}`)
              .then(() => { console.log('apagou') })
              .catch((e) => { console.log(e) })
          }
        })
        .catch((e) => {
          console.log(e)
          alert("Algum erro com a imagem")
        })
    }


    return await axiosAprovaApi.patch('/users/myuser', {
      nome: fullName,
      userName: username,
      dataNasc: birthdate,
      numCelular: phoneNumber,
      email: email,
      image: imageId != null ? imageId : undefined
    })
      .then(() => {
        alert("Alterações feitas com sucesso")
        return navigation.reset({
          routes: [{ name: 'Perfil' }],
        });

      })
      .catch(e => {
        if (e.response.data.message == "Email já cadastrado" || e.response.data.message == "Username já em uso")
          alert(e.response.data.message)
        else
          alert(e)
      })
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Text style={styles.infoTitle}>Informações Pessoais</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            {selectedImage ?
              <Image source={{ uri: selectedImage }} style={styles.characterImage} />
              :
              <Image source={{ uri: image() }} style={styles.characterImage} />
            }
            <TouchableOpacity style={styles.editButton} onPress={pickImageAsync}>
              <Ionicons name="pencil" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome completo"
              placeholderTextColor="#ccc"
              onChangeText={setFullName}
              value={fullName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome de usuário"
              placeholderTextColor="#ccc"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data de Nascimento</Text>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              style={styles.input}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={birthdate}
              onChangeText={(text) => setBirthdate(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Número de Telefone</Text>
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              style={styles.input}
              placeholder="(99) 99999-9999"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonYes} onPress={handleConfirm}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.reset({
                routes: [{ name: 'Perfil' }],
              });
            }}>
              <Text style={styles.buttonText} >Cancelar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
    alignItems: 'center',
  },
  characterImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#8A45ED',
    borderRadius: 7,
    padding: 3,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#8050C6',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
    marginTop: 25,
  },
  buttonYes: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#8A45ED',
    borderBottomWidth: 3,
    borderBottomColor: '#3C1673',
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#F34242',
    borderBottomWidth: 3,
    borderBottomColor: '#F41A1A',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Informacoes;
