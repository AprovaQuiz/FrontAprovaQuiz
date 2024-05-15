import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import dadosNoticias from '../../data/noticias/noticias'

const CardNoticiasListagem = ({ titulo, descricao, data, fonte, imagem }) => {
  return (
    <View style={styles.container}>
      {imagem && (
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: imagem }}
            style={styles.image}
          />
        </View>
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.subtitle}>{descricao}</Text>
        <Text style={styles.subtitle}>Fonte: {fonte}</Text>
        <Text style={styles.date}>Publicado em: {data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    margin: 0,
  },
  image: {
    height: 80,
    width: 130,
    margin:0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 17,
  },
  subtitle: {
    marginTop: 2,
  },
  date: {
    marginTop: 10,
    marginBottom: 10,
  }
});

export default CardNoticiasListagem;
