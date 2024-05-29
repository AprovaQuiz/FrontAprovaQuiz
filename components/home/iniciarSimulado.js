import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const CustomCard = () => {
  const navigation = useNavigation();
  
  // Função para gerar um número aleatório entre um intervalo
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  
  const goToSimulados = () => {
    navigation.navigate('Simulado1'); 
  };

  // Posições aleatórias para as bolas
  const circle1Position = { top: getRandomNumber(20, 60), left: getRandomNumber(20, 200) };
  const circle2Position = { top: getRandomNumber(20, 60), left: getRandomNumber(140, 270) };
  const circle3Position = { top: getRandomNumber(20, 60), left: getRandomNumber(260, 340) };
  const circle4Position = { top: getRandomNumber(70, 120), left: getRandomNumber(20, 200) };
  const circle5Position = { top: getRandomNumber(70, 120), left: getRandomNumber(140, 270) };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={[styles.circle, circle1Position]} />
        <View style={[styles.circle, circle2Position]} />
        <View style={[styles.circle, circle3Position]} />
        <View style={[styles.circle, circle4Position]} />
        <View style={[styles.circle, circle5Position]} />
        <View style={styles.textAndButtonContainer}>
          <Text style={styles.title}>Realize o simulado e teste seus conhecimentos!</Text>
          <TouchableOpacity style={styles.button} onPress={goToSimulados}>
            <Text style={styles.buttonText}>Gerar simulado</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginHorizontal: 10,
  },
  card: {
    width: "100%", 
    height: 165,
    borderRadius: 20,
    backgroundColor: '#8A45ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10, 
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#3C1673', 
  },
  circle: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  textAndButtonContainer: {
    alignItems: 'flex-start', 
    paddingLeft: 10, 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 21,
    fontFamily: 'Nunito-Bold',
    textAlign: 'left',
    marginTop: 10,
    width: 293,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 25,
    width: 113,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#8A45ED',
    fontSize: 13,
  },
});

export default CustomCard;
