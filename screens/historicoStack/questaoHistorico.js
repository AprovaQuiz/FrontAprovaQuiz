import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import QuestaoVestibular from '../../components/historico/questoes';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const QuestaoScreen = ({ route }) => {

  const questaoAnswered = route.params.questaoParam;
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
        </View>
        <View>
          <QuestaoVestibular
            titulo={route.params.index + 1}
            enunciado={questaoAnswered.questao.enunciado}
            pergunta={questaoAnswered.questao.pergunta}
            alternativas={questaoAnswered.questao.alternativas}
            respRegistrada={questaoAnswered.respRegistrada}
            acerto={questaoAnswered.acerto}
            alternativaCorreta={questaoAnswered.questao.alternativaCorreta}
          />
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
});

export default QuestaoScreen;
