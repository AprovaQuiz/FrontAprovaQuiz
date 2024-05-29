import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const QuestaoVestibular = ({ questao }) => {
  const { titulo, enunciado, alternativas, pergunta } = questao;
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const selecionarResposta = (index) => {
    setRespostaSelecionada(index);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>{titulo}</Text>
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
              <Text style={styles.alternativaText}>{alternativa}</Text>
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

export default QuestaoVestibular;
