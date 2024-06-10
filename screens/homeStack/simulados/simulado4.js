import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import FloatingBubbles from '../../../components/home/simulado/bubble';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { axiosAprovaApi } from '../../../config/http';
import storage from '../../../config/storage';


const ViewBox = props => (
  <View style={[props.style, { backgroundColor: 'white' }]}>
    {props.children}
  </View>
);

const Simulado4 = ({ route }) => {
  const navigation = useNavigation();

  const backPress = () => {
    navigation.goBack()
  }

  const paramsQuestions = route.params

  console.log(route.params)

  const handleGet = useCallback(async () => {

    await axiosAprovaApi.get(`/questions/generateQuiz/${paramsQuestions.subject.nome}/${paramsQuestions.topic.nome}/${paramsQuestions.questionCount}`)
      .then(r => {
        if (r.data != null) {

          storage.save({
            key: 'questions', data: {
              questions: r.data,
              id_Topic: paramsQuestions.topic._id,
              id_Subject: paramsQuestions.subject._id
            }
          })
          return navigation.navigate('QuestaoSimulado', {
            index: 0
          })

        } else {

          alert('Erro\nNão foram encontradas Questões,\nVoltando para Home...')
          return navigation.navigate('Home')

        }
      })
      .catch(e => {
        console.log(e)
      })

  }, [])

  useEffect(() => {
    handleGet()
  }, [handleGet])


  return (
    <View style={styles.container}>
      <FloatingBubbles numBubbles={30} />
      <View style={styles.header}>
        <TouchableOpacity onPress={backPress}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <ViewBox style={styles.mainBox}>
        <Text style={styles.title}>Estamos carregando seu simulado</Text>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#8A45ED" />
        </View>
      </ViewBox>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dropdownEstilo: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    color: '#8A45ED',
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    maxWidth: 300,
    marginBottom: 40,
    marginHorizontal: 15,
  },
  mainBox: {
    flexShrink: 0,
    minWidth: 300,
    minHeight: 200,
    borderRadius: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    position: 'absolute',
    top: 30,
    left: 20,
  },
});

export default Simulado4;
