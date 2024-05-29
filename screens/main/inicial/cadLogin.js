import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadLogin = () => {
  const navigation = useNavigation();

  const navigateToCad = () => {
    navigation.navigate('SignUpScreen');
  };
  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d4f6f8fc00240dd701718540e04a9739',
          }}
          style={styles.image}
        />
        <Text style={styles.text}>
          <Text style={[styles.bem, styles.bemVindo]}>Bem-</Text>
          <Text style={[styles.vindo, styles.bemVindo]}>vindo</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cadastrarButton]}
            onPress={navigateToCad}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={navigateToLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bemVindo: {
    marginHorizontal: -5,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bem: {
    color: '#000000',
  },
  vindo: {
    color: '#8A45ED',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 50,
    marginBottom: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 15,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cadastrarButton: {
    backgroundColor: '#8A45ED',
    borderBottomWidth: 4,
    borderColor: '#4B0082',
    shadowColor: '#4B0082',
  },
  loginButton: {
    backgroundColor: '#000',
    borderBottomWidth: 4,
    borderColor: '#484848',
    shadowColor: '#484848',
  },
});

export default CadLogin;
