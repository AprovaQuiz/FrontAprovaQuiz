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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Informacoes = () => {
  const navigation = useNavigation();
  
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleConfirm = () => {
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

    if (!/^\d+$/.test(birthdate)) {
      alert('A data de nascimento deve conter apenas números.');
      return;
    }

    if (!/^\d+$/.test(phoneNumber)) {
      alert('O número de telefone deve conter apenas números.');
      return;
    }

    // Simulação de confirmação de conta
    alert('Informações salvas com sucesso!');
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
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/17/17004.png' }} style={styles.characterImage} />
            <TouchableOpacity style={styles.editButton}>
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
            <TextInput
              style={styles.input}
              placeholder="Sua data de nascimento"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={birthdate}
              onChangeText={(text) => setBirthdate(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Número de Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu número de telefone"
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cancelar</Text>
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
