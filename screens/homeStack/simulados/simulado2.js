// ScreenOne.js
import React from 'react';
import TemplateScreen from '../../../components/home/simulado/TemplateScreen';
import { useNavigation } from '@react-navigation/native';

const Simulado2 = () => {
  const navigation = useNavigation();
  const headerText = "De qual caderno você deseja fazer o simulado?";
  const buttonColors = ['#C4A1F7', '#AB7AF2', '#915DDD', '#6034A0', '#431585'];
  const buttonTexts = ['História', 'Geografia', 'Matematica', 'Português', 'Fisica'];

  //esses Alert são placeholders, n precisa mexer
  const handlePress1 = () => {
    alert('Botão de 1 foi pressionado');
    navigation.navigate('Simulado3');
  };

  const handlePress2 = () => {
    alert('Botão de 2 foi pressionado');
    navigation.navigate('Simulado3');
  };

  const handlePress3 = () => {
    alert('Botão de 3 foi pressionado');
    navigation.navigate('Simulado3');
  };

  const handlePress4 = () => {
    alert('Botão de 4 foi pressionado');
    navigation.navigate('Simulado3');
  };

  const handlePress5 = () => {
    alert('Botão de 5 foi pressionado');
    navigation.navigate('Simulado3');
  };

  const buttonOnPressHandlers = [
    handlePress1,
    handlePress2,
    handlePress3,
    handlePress4,
    handlePress5,
  ];
  
  const backPress = () => {
    navigation.goBack()
  }

  return (
    <TemplateScreen
      backPress={backPress}
      headerText={headerText}
      buttonColors={buttonColors}
      buttonTexts={buttonTexts}
      buttonOnPressHandlers={buttonOnPressHandlers}
    />
  );
};

export default Simulado2;
