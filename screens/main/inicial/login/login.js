import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { axiosAprovaApi } from "../../../../config/http";
import storage from "../../../../config/storage";


const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation();

  const navigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [stayConnected, setStayConnected] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const data = {
      email: isValidEmail(email),
      senha: password,
    }

    await axiosAprovaApi
      .post("/users/login", data)
      .then((r) => {
        storage.save({ key: 'access-token', data: r.data.accessToken })
        if (stayConnected)
          storage.save({ key: 'stayConnected', data: true })
        return navigation.navigate('Main');
      })
      .catch((e) => {
        alert(`${e.code == 401 ? e : e.response.data.message}`);
      });
  }

  const isValidEmail = (email) => {
    // Esta é uma função de validação de e-mail simples
    // Você pode implementar uma validação mais complexa conforme necessário

    if (/\S+@\S+\.\S+/.test(email))
      return email;
    else
      return false;
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
        <Text style={styles.title}>Oi, tudo bem? 👋</Text>
        <Text style={styles.instructions1}>Seja bem-vindo de volta!</Text>
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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Digite sua senha"
              placeholderTextColor="#ccc"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#8050C6"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setStayConnected(!stayConnected)}
        >
          <View
            style={[
              styles.checkboxButton,
              stayConnected && styles.checkedCheckbox,
            ]}
          />
          <Text style={styles.checkboxText}>Manter conectado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={navigateToForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: width * 0.1,
    fontWeight: "bold",
    marginTop: height * 0.02,
  },
  instructions1: {
    fontSize: 16,
    fontWeight: "medium",
    marginBottom: 70,
    color: "#000",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 12,
    fontSize: width * 0.04,
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#8050C6",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 1,
    fontSize: 16,
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#8050C6",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  checkboxButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#3C1673",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  checkedCheckbox: {
    backgroundColor: "#3C1673",
  },
  checkboxText: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "purple",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderBottomWidth: 5,
    borderColor: "#3C1673",
    width: "80%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 86,
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPasswordButton: {
    marginTop: 62,
  },
  forgotPasswordText: {
    fontSize: 18,
    color: "#391173",
    textAlign: "center",
    fontWeight: "bold",
  },
  seta: {
    position: "absolute",
    top: height * 0.03,
    width: width * 0.35,
    marginLeft: 15,
    zIndex: 1,
    borderRadius: 30,
  },
  header: {
    backgroundColor: "#fff",
    height: height * 0.1,
  },
});

export default LoginScreen;
