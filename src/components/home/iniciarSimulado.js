import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CustomCard = () => {
  // Função para gerar um número aleatório entre um intervalo
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gerar simulado</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Adicione o restante do conteúdo abaixo do card */}
      <View style={styles.remainingContent}>
        {/* Conteúdo restante aqui */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinhe o conteúdo no topo da página
    margin: 10,
  },
  card: {
    width: "100%", // Ajustado para ocupar 100% da largura
    height: 165,
    borderRadius: 20,
    backgroundColor: '#8A45ED',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10, // Ajustado para 10px de margem
    padding: 10, // Ajustado para 10px de padding
    borderBottomWidth: 4,
    borderColor: '#3C1673',
    shadowColor: '#3C1673',
  },
  circle: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  textAndButtonContainer: {
    alignItems: 'flex-start', // Alinha à esquerda
    paddingLeft: 10, // Adiciona um espaço à esquerda
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
  remainingContent: {
    marginTop: 185, // Margem superior para o restante do conteúdo para começar abaixo do card
    // Adicione outros estilos conforme necessário
  },
});

export default CustomCard;
