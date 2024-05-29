import React, { useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/cadernos/cardQuestao';

const ListaDeQuestoes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { assunto } = route.params || { assunto: null }; 

  const [questaoSelecionada, setQuestaoSelecionada] = useState(null);

  const handleSelecionarQuestao = (questao) => {
    setQuestaoSelecionada(questao);
    navigation.navigate('QuestaoScreenCadernos', { questao, assuntoNome: assunto.nome  });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Text style={styles.historicoTitle}>Questões - {assunto?.nome}</Text>
        </View>
        <FlatList
          data={assunto ? assunto.questoes : []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelecionarQuestao(item)}>
              <Card questao={item} />
            </TouchableOpacity>
          )}
        />
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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  historicoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ListaDeQuestoes;
