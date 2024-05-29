import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Senha = () => {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
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
    if (!oldPassword || !password || !confirmPassword) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Simulação de confirmação de conta
    alert('Senha alterada com sucesso!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Text style={styles.senhaTitle}>Senha</Text>
        </View>
        <ScrollView style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Coloque sua antiga senha</Text>
            <View style={styles.inputPasswordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Sua senha"
                placeholderTextColor="#ccc"
                secureTextEntry={!passwordVisible}
                value={oldPassword}
                onChangeText={(text) => setOldPassword(text)}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.icon}>
                <Ionicons
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  size={24}
                  color="#ccc"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Crie uma nova senha</Text>
            <View style={styles.inputPasswordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Sua nova senha"
                placeholderTextColor="#ccc"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.icon}>
                <Ionicons
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  size={24}
                  color="#ccc"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirme sua nova senha</Text>
            <View style={styles.inputPasswordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Confirme sua nova senha"
                placeholderTextColor="#ccc"
                secureTextEntry={!confirmPasswordVisible}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <TouchableOpacity
                onPress={toggleConfirmPasswordVisibility}
                style={styles.icon}>
                <Ionicons
                  name={confirmPasswordVisible ? 'eye-off' : 'eye'}
                  size={24}
                  color="#ccc"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonYes}>
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
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  senhaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputs: {
    padding: 10,
    marginTop: 20,
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
  icon: {
    padding: 5,
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

export default Senha;
