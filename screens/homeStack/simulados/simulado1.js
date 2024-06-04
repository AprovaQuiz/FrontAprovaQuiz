// ScreenOne.js
import React, { useCallback, useEffect, useState } from 'react';
import TemplateScreen from '../../../components/home/simulado/TemplateScreen';
import { useNavigation } from '@react-navigation/native';
import { axiosAprovaApi } from '../../../config/http';

const Simulado1 = () => {
  const navigation = useNavigation();
  const headerText = "De qual caderno você deseja fazer o simulado?";
  const buttonColors = ['#C4A1F7', '#AB7AF2', '#915DDD', '#6034A0', '#431585', '#4b0082'];
  const [selectedText, setSelectedText] = useState("")

  const backPress = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (selectedText != "") {
      navigation.navigate('Simulado2', { subject: selectedText })
    }
  }, [selectedText])

  const [subjects, setSubjects] = useState([{ nome: "Nenhuma", _id: "default" }])

  const handleGet = useCallback(async () => {

    await axiosAprovaApi.get(`/subjects`)
      .then(r => {
        setSubjects(subjects.concat(r.data))

      })
      .catch(e => {
        console.log(e)
      })

  }, [])

  useEffect(() => {
    handleGet()
  }, [handleGet])


  return (
    <TemplateScreen
      backPress={backPress}
      headerText={headerText}
      buttonColors={buttonColors}
      buttonTexts={subjects.map((subject => {
        return subject.nome
      }))}
      setText={setSelectedText}
    />
  );
};

export default Simulado1;
