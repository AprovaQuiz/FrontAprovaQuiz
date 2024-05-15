import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import IniciarSimulado from '../components/home/iniciarSimulado';
import Cadernos from '../components/cadernos/cardernosHome';
import Noticias from '../components/noticias/noticiasHome';

const HomeContent = ({ navigation }) => {
  const goToCadernos = () => {
    navigation.navigate('Cadernos');
  };

  const goToNoticias = () => {
    navigation.navigate('Notícias'); 
  };

  return (
    <ScrollView style={styles.container}>
      <IniciarSimulado />
      <View style={styles.header}>
        <Text style={styles.cadernosTitle}>Cadernos</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={goToCadernos}>
          <Text style={styles.buttonText}>Ver Tudo</Text>
        </TouchableOpacity>
      </View>
      <Cadernos />
      <View style={styles.header}>
        <Text style={styles.noticiasTitle}>Notícias</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={goToNoticias}>
          <Text style={styles.buttonText}>Ver Tudo</Text>
        </TouchableOpacity>
      </View>
      <Noticias />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  cadernosTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  noticiasTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#3C1673',
    marginRight: 5,
    backgroundColor: 'transparent',
  },
});

export default HomeContent;
