import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CardAssuntosListagem from '../../components/cadernos/cardAssuntoListagem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AssuntoLista = ({ route }) => {
  const { parteAssunto, materiaNome } = route.params;
  const navigation = useNavigation();

  // Estado para armazenar o assunto selecionado
  const [assuntoSelecionado, setAssuntoSelecionado] = useState(null);

  // Função para lidar com o clique em um assunto
  const handleMateriaClick = (assunto) => {
    navigation.navigate('QuestaoLista', { assunto }); // Passando o assunto como parâmetro
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Text style={styles.materiasTitle}>{materiaNome}</Text>
        </View>
        <ScrollView>
          <CardAssuntosListagem
            parteAssunto={parteAssunto}
            onMateriaClick={handleMateriaClick}
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
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  materiasTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AssuntoLista;
