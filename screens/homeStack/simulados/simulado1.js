import React from 'react';
import TemplateScreen from '../../../components/home/simulado/TemplateScreen';
import { useNavigation } from '@react-navigation/native';

const Simulado1 = () => {
  const navigation = useNavigation();
  const headerText = "Qual o nível de dificuldade você deseja?";
  const buttonColors = [ '#915DDD', '#6034A0', '#431585'];
  const buttonTexts = ['Fácil', 'Médio', 'Difícil'];

  //esses Alert são placeholders, n precisa mexer
  const handlePress1 = () => {
    alert('Botão de 1 foi pressionado');
    navigation.navigate('Simulado2');
  };

  const handlePress2 = () => {
    alert('Botão de 2 foi pressionado');
    navigation.navigate('Simulado2');
  };

  const handlePress3 = () => {
    alert('Botão de 3 foi pressionado');
    navigation.navigate('Simulado2');
  };

  const backPress = () => {
    navigation.goBack()
  }


  const buttonOnPressHandlers = [
    handlePress1,
    handlePress2,
    handlePress3,
  ];

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

export default Simulado1;
