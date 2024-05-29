import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import CardMateriasListagem from '../../components/cadernos/cardMateriasListagem';
import { Ionicons } from '@expo/vector-icons';
import cadernosENEM from '../../data/cadernos'; // Importe os dados dos cadernos

const MateriasLista = ({ navigation, route }) => {
  const { categoria } = route.params;

  console.log('Categoria recebida:', categoria);

  // Encontre o caderno correspondente à categoria selecionada
  const caderno = cadernosENEM.find((caderno) => caderno.categoria === categoria);

  console.log('Caderno encontrado:', caderno);

  const handleMateriaClick = (materia) => {
    console.log('Matéria clicada:', materia);
    // Navegar para a tela de ParteAssuntoListagem com os novos itens da matéria
    navigation.navigate('AssuntosListagem', { parteAssunto: materia.novosItens, materiaNome: materia.nome });
  };

  if (!caderno) {
    return (
      <View style={styles.container}>
        <Text>Caderno não encontrado para a categoria: {categoria}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Text style={styles.materiasTitle}>{caderno.titulo}</Text>
        </View>
        <ScrollView>
          <CardMateriasListagem materias={caderno.materias} onMateriaClick={handleMateriaClick} />
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
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  materiasTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MateriasLista;
