import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { axiosAprovaApi } from '../../config/http';
import { useNavigation } from '@react-navigation/native';

const HistoricoItem = ({ questoesLength, materia, assunto, realizadoEm, pertence, id }) => {

  const navigation = useNavigation();

  async function handleDelete(id) {
    await axiosAprovaApi.delete(`/historics/${id}`)
      .then(() => {
        alert('Deletado com Sucesso!')
        navigation.reset({
          routes: [{ name: 'Histórico' }],
        });
      })
      .catch((e) => {
        console.log(e)
        alert('Algum erro aconteceu')
      })
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2023/05/teste-em-producao.webp" }}
            style={styles.image}
          />
          <View style={styles.infoBadge}>
            <Text style={styles.infoText}>{questoesLength}qs</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{pertence}</Text>
          <Text style={styles.subtitle}>{materia}</Text>
          <Text style={styles.subtitle}>{assunto}</Text>
          <Text style={styles.date}>{realizadoEm}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(id)}>
        <FontAwesome name="trash" size={20} color="#8A45ED" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 130,
    width: 130,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  infoBadge: {
    position: 'absolute',
    bottom: 5,
    left: 8,
    backgroundColor: '#8A45ED',
    padding: 5,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  subtitle: {
    marginTop: 2,
  },
  date: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HistoricoItem;
