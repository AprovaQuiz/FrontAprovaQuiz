import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import CardNoticiasListagem from '../components/noticias/cardNoticiasListagem';
import noticias from '../data/noticias/noticias';
import { Ionicons } from '@expo/vector-icons'; 

const NoticiasLista = ({ navigation }) => {

  const todasNoticias = noticias.reduce((acc, grupo) => {
    acc.push(...grupo.noticias);
    return acc;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <Text style={styles.noticiasTitle}>Noticias</Text>
      </View>
      <View>
      {todasNoticias.map((noticia, index) => (
        <CardNoticiasListagem
          key={index}
          titulo={noticia.titulo}
          descricao={noticia.descricao}
          data={noticia.data}
          fonte={noticia.fonte}
        />
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  noticiasTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default NoticiasLista;