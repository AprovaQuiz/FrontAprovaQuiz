import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import CardMateriasListagem from '../components/cadernos/cardMateriasListagem';
import { Ionicons } from '@expo/vector-icons';
import cadernosENEM from '../data/cadernos'; // Importe os dados dos cadernos

const MateriasLista = ({ navigation, route }) => {
  const { categoria } = route.params;

  // Encontre o caderno correspondente à categoria selecionada
  const caderno = cadernosENEM.find((caderno) => caderno.categoria === categoria);

  const handleMateriaClick = (materia) => {
    console.log('Matéria clicada:', materia);
    // Implemente a lógica para lidar com o clique em uma matéria aqui
    // Por exemplo, navegar para os detalhes da matéria
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <Text style={styles.materiasTitle}>{caderno.titulo}</Text>
      </View>
      {/* Renderizar o componente CardMateriasListagem com as matérias do caderno */}
      <CardMateriasListagem materias={caderno.materias} onMateriaClick={handleMateriaClick} />
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
  materiasTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MateriasLista;
