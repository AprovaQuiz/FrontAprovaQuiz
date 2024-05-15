import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import CardCadernosListagem from '../components/cadernos/cardCadernosListagem';
import cadernosENEM from '../data/cadernos';
import { Ionicons } from '@expo/vector-icons';

const CadernosLista = ({ navigation }) => {
  const handleCategoriaClick = (categoria) => {
    // Navegar para a tela de MateriasLista com a categoria selecionada
    navigation.navigate('MateriasLista', { categoria });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <Text style={styles.cadernosTitle}>Cadernos</Text>
      </View>
      <CardCadernosListagem
        cadernos={cadernosENEM}
        onCardClick={handleCategoriaClick}
      />
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
  cadernosTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CadernosLista;
