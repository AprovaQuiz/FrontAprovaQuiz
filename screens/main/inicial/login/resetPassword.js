import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { axiosAprovaApi } from '../../../../config/http';

const { width, height } = Dimensions.get('window');

const ResetPasswordScreen = ({ route }) => {
  const { email, number } = route.params;

  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    if (newPassword.length < 6 || !/[A-Z]/.test(newPassword)) {
      alert('Senha fraca, precisa ao menos 6 caracteres e ao menos uma letra Maiúscula');
      return;
    }

    await axiosAprovaApi.patch('/passRecovers/password', {
      email: email,
      number: number,
      senha: newPassword
    })
      .then(() => {
        setShowModal(true);
      })
      .catch((e) => {
        alert(e)
      })

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.seta}
        >
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Criar nova senha 🔐</Text>
        <Text style={styles.subtitle}>
          Salve sua nova senha em um local seguro. Se você esquecer ela, terá
          que fazer uma novamente em “esqueci minha senha”.
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Crie uma nova senha</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nova Senha"
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <Ionicons
                name={showNewPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#8A45ED"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.inputLabel}>Confirme a nova senha</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmar Nova Senha"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#8A45ED"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.iconContainer}>
              <Ionicons name="checkmark-circle" size={100} color="#8A45ED" />
              <View style={styles.ellipse} />
              <View style={styles.ballsContainer}>
                <View style={[styles.ball, styles.ballLarge]} />
                <View style={[styles.ball, styles.ballSmall]} />
              </View>
            </View>
            <Text style={styles.modalTitle}>Bem-vindo de volta!</Text>
            <Text style={styles.modalSubtitle}>
              Você redefiniu sua senha com sucesso!
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Login');
              }}
            >
              <Text style={styles.modalButtonText}>Ir para o Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginTop: height * 0.06,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'medium',
    marginBottom: 70,
    color: '#000',
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'transparent',
    borderBottomColor: '#8A45ED',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    flex: 1,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    color: '#000',
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
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
    marginTop: 10,
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
    height: height * 0.1,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  checkboxButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#3C1673',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  checkedCheckbox: {
    backgroundColor: '#3C1673',
  },
  checkboxText: {
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
  ellipse: {
    position: 'absolute',
    top: 80,
    width: 120,
    height: 60,
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
    zIndex: -1,
  },
  ballsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    position: 'absolute',
    backgroundColor: '#C59DFF',
    borderRadius: 50,
  },
  ballLarge: {
    width: 30,
    height: 30,
    top: -15,
    left: -40,
  },
  ballSmall: {
    width: 15,
    height: 15,
    top: -10,
    left: 40,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 90,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
