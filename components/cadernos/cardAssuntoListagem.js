import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CardAssuntosListagem = ({ parteAssunto, onMateriaClick }) => {
  return (
    <>
    <ScrollView style={styles.container}>
      {parteAssunto.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onMateriaClick(item)} // Passando o assunto como argumento
          style={styles.card}
        >
          <View style={styles.cardContainer}>
          <Text style={styles.title}>{item.nome}</Text>
            <Image source={{ uri: item.imagem }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default CardAssuntosListagem;
