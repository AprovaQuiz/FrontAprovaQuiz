import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions, ActivityIndicator, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [emailExistsModalVisible, setEmailExistsModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleConfirm = () => {
    // Verificação de dados antes de confirmar
    if (!username || !email || !password || !confirmPassword) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    if (!/^[a-zA-Z]+$/.test(username)) {
      alert('O nome de usuário deve conter apenas letras.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Simulação de confirmação de conta
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false),
      navigation.replace('Main');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.seta}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <View style={styles.titleBar}></View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Crie uma conta ✏️</Text>
        <Text style={styles.instructions1}>
          Digite seu nome de usuário, endereço de e-mail, senha, data de nascimento e número de telefone.
        </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome de usuário"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={text => setUsername(text)}
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
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputPasswordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Sua senha"
            placeholderTextColor="#ccc"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
            <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="#ccc" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirmar Senha</Text>
        <View style={styles.inputPasswordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Confirme sua senha"
            placeholderTextColor="#ccc"
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.icon}>
            <Ionicons name={confirmPasswordVisible ? "eye-off" : "eye"} size={24} color="#ccc" />
          </TouchableOpacity>
        </View>
      </View>
      
    <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onDismiss={() => {
          setTimeout(() => {
            navigation.navigate('Home');
          }, 1000);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9fc07281cc9be7961356b259c9dafa48'}} style={styles.profileImage} />
            <Text style={styles.modalTitle}>Parabéns!</Text>
            <Text style={styles.modalMessage}>Seu perfil está pronto.</Text>
            <ActivityIndicator size="large" color="#8A45ED" />
          </View>
        </View>
      </Modal>
    </ScrollView>
    
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: width * 0.1, 
    fontWeight: 'bold',
    marginTop: height * 0.06,
  },
  instructions1: {
    fontSize: width * 0.04,
    marginTop: height * 0.03,
    marginBottom: height * 0.03,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 12,
    fontSize: width * 0.04,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#8050C6',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderBottomWidth: 5,
    borderColor: '#3C1673',
    width: '80%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    marginTop: 46, 
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#8050C6', 
    marginBottom: 16,
  },
  inputPassword: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 12,
  },
  titleBar: {
    position: 'absolute',
    top: height * 0.07,
    width: width * 0.35,
    height: 15,
    backgroundColor: '#8050C6',
    alignSelf: 'center',
    zIndex: 1,
    borderRadius: 30,
  },
  seta: {
    position: 'absolute',
    top: height * 0.03,
    width: width * 0.35,
    marginLeft: 15,
    zIndex: 1,
    borderRadius: 30,
  },
  header: {
    backgroundColor: '#fff',
    height: height * 0.10,
  },
  icon: {
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    height: '55%',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 70,
  },
});

export default ConfirmationScreen;
