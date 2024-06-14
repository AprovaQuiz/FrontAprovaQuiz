import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import grupos from '../../data/noticias/grupos';
import { useNavigation } from '@react-navigation/native';

const CardGrupos = ({ grupos }) => {
  const navigation = useNavigation();
  const handleGroupPress = (nome) => {
    navigation.navigate('Notícias', { groupName: nome });
  };

  return (
    <View style={styles.container}>
      {grupos.map((grupo, index) => (
        <TouchableOpacity
          key={index}
          style={styles.groupContainer}
          onPress={() => handleGroupPress(grupo.nome)}>
          <View key={index} style={styles.groupContainer}>
            <Image source={{ uri: grupo.imagem }} style={styles.image} />
            <View style={styles.gradientContainer}>
              <View style={styles.gradient} />
            </View>
            <Text style={styles.title}>{grupo.nome}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  groupContainer: {
    width: 220,
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 6, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradientContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7))',
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default CardGrupos;
