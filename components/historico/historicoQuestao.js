import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ questao }) => {
  const { titulo, acertoErro, lugarAno, id } = questao;
  const navigation = useNavigation();

  const handleVerQuestaoCompleta = () => {
    navigation.navigate('QuestaoScreen', { questao }); // Passando a questão como parâmetro
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: questao.imagemUrl }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{titulo}</Text>
          <Text style={[styles.subtitle, acertoErro === 'acertou' ? styles.acertou : styles.errou]}>
            {acertoErro === 'acertou' ? 'Acertou' : 'Errou'}
          </Text>
          <Text style={styles.date}>{lugarAno}</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleVerQuestaoCompleta}
          >
            <Text style={styles.buttonText}>Visualizar questão por completo</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1, 
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    flex: 1, 
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 17,
    maxWidth: '100%', // Limitando a largura máxima do título
  },
  subtitle: {
    marginTop: 2,
    fontWeight: 'bold',
  },
  acertou: {
    color: 'green',
  },
  errou: {
    color: 'red',
  },
  date: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8A45ED',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#3C1673',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Card;
