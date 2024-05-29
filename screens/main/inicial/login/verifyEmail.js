import React, { useState, useEffect } from 'react';
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

const VerifyEmailScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(55);

useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleResendCode = () => {
    if (timer === 0) {
      setTimer(55);
      alert('Código reenviado para seu e-mail');
    }
  };

  const handleConfirm = () => {
    const verificationCode = code.join('');
    if (verificationCode.length !== 4) {
      Alert.alert('Erro', 'Por favor, insira o código completo.');
      return;
    }
  alert(`Código verificado: ${verificationCode}`);
  navigation.navigate('ResetPassword');
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
        <Text style={styles.title}>Verifique seu E-mail</Text>
        <Text style={styles.instructions1}>Digite o código enviado para o seu e-mail.
        </Text>
        <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(index, value)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleResendCode} disabled={timer > 0}>
        <Text style={styles.resendButtonText}>Não recebeu o e-mail?</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>
        Você pode reenviar o código em {timer} s
      </Text>

        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirmar</Text>
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
    fontSize: 38, 
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
    marginTop: 150,
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  codeInput: {
    width: 77,
    height: 77,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
    backgroundColor: '#D9D9D9',
  },
  resendButtonText: {
    fontSize: 16,
    color: '#391173',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  timerText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default VerifyEmailScreen;
