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
import { TextInputMask } from 'react-native-masked-text';
import storage from '../../../../config/storage';

const { width, height } = Dimensions.get('window');

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {

    if (!isValidDateOfBirth(dateOfBirth)) {
      Alert.alert('Erro', 'Por favor, insira uma data de nascimento válida.');
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      Alert.alert('Erro', 'Por favor, insira um número de celular válido.');
      return;
    }


    storage.save({
      key: 'singUpCredentials',
      data: {
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber
      }
    })

    return navigation.navigate('ConfirmationScreen');
  };


  const isValidDateOfBirth = (date) => {
    // Aqui você pode implementar a validação para a data de nascimento conforme necessário
    // Por exemplo, você pode verificar se a data está em um formato específico ou se é válida em relação à data atual
    return true; // Implemente a lógica de validação aqui
  };

  const isValidPhoneNumber = (number) => {
    // Verifica se o número tem 11 dígitos (formato brasileiro com DDD e 9 dígitos)
    const cleanedNumber = number.replace(/\D/g, '');
    return cleanedNumber.length === 11;
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
          Por favor, complete seu perfil.
        </Text>
        <Text style={styles.instructions2}>
          Não se preocupe, seu perfil permanecerá privado e só você poderá
          vê-los.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#ccc"
            onChangeText={setFullName}
            value={fullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de nacimento</Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            style={styles.input}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={dateOfBirth}
            onChangeText={(text) => setDateOfBirth(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número de celular</Text>
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
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
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
    marginTop: height * 0.06,
  },
  instructions1: {
    fontSize: width * 0.04,
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
  },
  instructions2: {
    fontSize: width * 0.04,
    marginBottom: height * 0.06,
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
});

export default SignUpScreen;
