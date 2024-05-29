import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import CardCadernosListagem from '../../components/cadernos/cardCadernosListagem';
import cadernosENEM from '../../data/cadernos';
import { Ionicons } from '@expo/vector-icons';

const CadernosLista = ({ navigation }) => {
  const handleCategoriaClick = (categoria) => {
    navigation.navigate('MateriasLista', { categoria });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <Text style={styles.cadernosTitle}>Cadernos</Text>
      </View>
      <ScrollView>
      <CardCadernosListagem
        cadernos={cadernosENEM}
        onCardClick={handleCategoriaClick}
      />
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  cadernosTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CadernosLista;
