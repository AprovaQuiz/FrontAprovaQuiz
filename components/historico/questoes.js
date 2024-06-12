import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuestaoVestibular = ({ titulo, enunciado, alternativas, pergunta, respRegistrada, acerto, alternativaCorreta }) => {

  function handleSelect(index) {
    if (acerto && respRegistrada == index)
      return styles.alternativaSelecionadaAcerto
    if (!acerto && respRegistrada == index) {
      return styles.alternativaSelecionadaErro
    }
    if (alternativaCorreta == index)
      return styles.alternativaSelecionadaAcerto
  }

  function handleSelectText(index) {
    if (acerto && respRegistrada == index)
      return styles.alternativaTextSelecionada
    else if (!acerto && respRegistrada == index || alternativaCorreta == index) {
      return styles.alternativaTextSelecionada
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Questão {titulo}</Text>
      <Text style={styles.enunciado}>{enunciado}</Text>
      <Text style={styles.pergunta}>{pergunta}</Text>
      <View style={styles.alternativasContainer}>
        {alternativas?.map((alternativa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.alternativaButton}
            onPress={() => selecionarResposta(index)}
          >
            <View
              style={[
                styles.alternativaCircle,
                handleSelect(index)
              ]}
            >
              <Text
                style={[
                  styles.alternativaText,
                  styles.alternativaTextUpperCase,
                  handleSelectText(index)
                ]}
              >
                {String.fromCharCode(65 + index)}
              </Text>
            </View>
            <Text style={styles.alternativaText}>{alternativa.textoAlt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
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
    color: '#401283'
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
  alternativaSelecionadaAcerto: {
    backgroundColor: '#4CAF50',
  },
  alternativaSelecionadaErro: {
    backgroundColor: '#c30010',
  },
  alternativaTextSelecionada: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default QuestaoVestibular;
