import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

const handleResetPassword = () => {
    if (!email || !isValidEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }
    // Aqui você pode adicionar a lógica para enviar o email de recuperação de senha
    alert(`Email de recuperação enviado para: ${email}`);
    
    navigation.navigate('VerifyEmail');
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.seta}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Esqueceu a senha?</Text>
        <Text style={styles.instructions1}>Digite seu email para receber um código de acesso.
        </Text>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#ccc"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address" 
        />
      </View>

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
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
    marginTop: height * 0.02,
  },
  instructions1: {
    fontSize: 16,
    fontWeight: 'medium',
    marginBottom: 70,
    color: '#000',
    marginTop: 20,
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
    marginTop: height * 0.3,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
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
});

export default ForgotPasswordScreen;
