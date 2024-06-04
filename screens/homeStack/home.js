import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import IniciarSimulado from '../../components/home/iniciarSimulado';
import Cadernos from '../../components/cadernos/cardernosHome';
import Noticias from '../../components/noticias/noticiasHome';

import { Ionicons } from '@expo/vector-icons';
import { axiosAprovaApi } from '../../config/http';

const HomeContent = ({ navigation }) => {
  const goToCadernos = () => {
    navigation.navigate('Cadernos');
  };

  const goToNoticias = () => {
    navigation.navigate('Notícias');
  };

  /* useEffect(() => {
    axiosAprovaApi.get('/users/myuser')
      .then(() => {
        console.log("deu certo")
      })
      .catch(e => {
        console.log(e)
      })
  }, []) */


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <IniciarSimulado />
        <Header title="Cadernos" onPress={goToCadernos} />
        <Cadernos />
        <Header title="Notícias" onPress={goToNoticias} />
        <Noticias />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header = ({ title, onPress }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>Ver Tudo</Text>
      <Ionicons name="arrow-forward-outline" size={24} color="#3C1673" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3C1673',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#3C1673',
    marginRight: 5,
  },
});

export default HomeContent;