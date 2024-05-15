import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardCadernos = ({ cadernos }) => {
  return (
    <View>
      {cadernos.map((caderno, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: caderno.imagem }} style={styles.image} />
            <View style={styles.rectangle}>
              <Text style={styles.rectangleText}>{caderno.quantidadeQuestoes}qs</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>{caderno.titulo}</Text>
            <Text style={styles.description}>{caderno.descricao}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    height: 220,
    marginEnd: 10,
    backgroundColor: '#fff',
    width: 230,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rectangle: {
    position: 'absolute',
    backgroundColor: '#8A45ED',
    borderRadius: 8,
    padding: 8,
    bottom: 10,
    right: 10,
  },
  rectangleText: {
    color: '#fff',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  description: {
    fontSize: 15,
    textAlign: 'left',
  },
});

export default CardCadernos;
