import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const QuestaoSimulado = ({ questao, length, currentIndex }) => {
  const { enunciado, alternativas, pergunta } = questao;
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params

  const selecionarResposta = (index) => {
    setRespostaSelecionada(index);

    const answers = [{
      questao: questao._id,
      respRegistrada: index,
      index: currentIndex
    }]


    const handleQuestions = params.questions ? params.questions : null;
    if (currentIndex < length - 1) {

      if (params.questions && typeof params.questions[currentIndex] !== 'undefined') {
        const auxParams = params.questions;

        auxParams[currentIndex] = {
          questao: questao._id,
          respRegistrada: index,
          index: currentIndex
        }

        return navigation.navigate('QuestaoSimulado', {
          index: currentIndex + 1,
          questions: auxParams
        })

      } else {

        return navigation.navigate('QuestaoSimulado', {
          index: currentIndex + 1,
          questions: handleQuestions == null ? answers : handleQuestions.concat(answers)
        })
      }

    }
    else {
      return navigation.navigate('ConclusaoSimulado', {
        questions: handleQuestions.concat(answers)
      });
    }
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>{`Questao ${currentIndex + 1}`}</Text>
        <Text style={styles.enunciado}>{enunciado}</Text>
        <Text style={styles.pergunta}>{pergunta}</Text>
        <View style={styles.alternativasContainer}>
          {alternativas.map((alternativa, index) => (
            <TouchableOpacity
              key={index}
              style={styles.alternativaButton}
              onPress={() => selecionarResposta(index)}>
              <View
                style={[
                  styles.alternativaCircle,
                  respostaSelecionada === index &&
                  styles.alternativaSelecionada,
                ]}>
                <Text
                  style={[
                    styles.alternativaText,
                    styles.alternativaTextUpperCase,
                    respostaSelecionada === index &&
                    styles.alternativaTextSelecionada,
                  ]}>
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <Text style={styles.alternativaText}>{alternativa.textoAlt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#401283',
  },
  enunciado: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 20,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'justify',
  },
  alternativasContainer: {
    width: '100%',
  },
  alternativaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  alternativaCircle: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  alternativaText: {
    fontSize: 16,
  },
  alternativaTextUpperCase: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
  alternativaSelecionada: {
    backgroundColor: '#4CAF50',
  },
  alternativaTextSelecionada: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default QuestaoSimulado;
