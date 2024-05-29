import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CardCadernosListagem = ({ cadernos, onCardClick }) => {
  return (
    <ScrollView style={styles.container}>
      {cadernos && cadernos.map((caderno, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onCardClick(caderno.categoria)}
          style={styles.card}
        >
          <View style={styles.cardContainer}>
            <Text style={styles.title}>{caderno.titulo}</Text>
            <Image source={{ uri: caderno.imagem }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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

export default CardCadernosListagem;
