// ScreenOne.js
import React, { useEffect, useState } from 'react';
import TemplateScreen from '../../../components/home/simulado/TemplateScreen';
import { useNavigation } from '@react-navigation/native';

const Simulado1 = () => {
  const navigation = useNavigation();
  const headerText = "De qual caderno você deseja fazer o simulado?";
  const buttonColors = ['#C4A1F7', '#AB7AF2', '#915DDD', '#6034A0', '#431585'];
  const buttonTexts = ['Nenhuma', 'História', 'Geografia', 'Matematica', 'Português', 'Fisica'];

  const [selectedText, setSelectedText] = useState("")

  const backPress = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (selectedText != "") {
      navigation.navigate('Simulado2', { subject: selectedText })
    }
  }, [selectedText])


  return (
    <TemplateScreen
      backPress={backPress}
      headerText={headerText}
      buttonColors={buttonColors}
      buttonTexts={buttonTexts}
      setText={setSelectedText}
    />
  );
};

export default Simulado1;
