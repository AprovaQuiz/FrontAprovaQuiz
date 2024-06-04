import React, { useEffect, useState } from 'react';
import TemplateScreen from '../../../components/home/simulado/TemplateScreen';
import { useNavigation } from '@react-navigation/native';

const Simulado3 = ({ route }) => {
  const navigation = useNavigation();
  const headerText = "Qual a quantidade de questões você deseja?";
  const buttonColors = ['#AB7AF2', '#915DDD', '#6034A0', '#431585'];
  const buttonTexts = ['Até 15', 'Até 20', 'Até 25', 'Até 30'];

  const [selectedText, setSelectedText] = useState("")

  const backPress = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (selectedText != "") {
      const onlyNumber = Number(selectedText.replace(/\D/g, ""));
      navigation.navigate('Simulado4', { ...route.params, questionCount: onlyNumber })
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

export default Simulado3;
