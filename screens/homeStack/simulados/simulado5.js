import React from 'react';
import TemplateScreen from '../../../components/home/simulado/TemplateScreen';
import { useNavigation } from '@react-navigation/native';

const Simulado5 = () => {
  const navigation = useNavigation();
  const headerText = "Qual a quantidade de questões você deseja?";
  const buttonColors = ['#AB7AF2', '#915DDD', '#6034A0', '#431585'];
  const buttonTexts = ['Até 15', 'Até 20', 'Até 25', 'Até 30'];

  //esses Alert são placeholders, n precisa mexer
  const handlePress1 = () => {
    alert('Botão de 1 foi pressionado');
    navigation.navigate('Simulado6');
  };

  const handlePress2 = () => {
    alert('Botão de 2 foi pressionado');
    navigation.navigate('Simulado6');
  };

  const handlePress3 = () => {
    alert('Botão de 3 foi pressionado');
    navigation.navigate('Simulado6');
  };

  const buttonOnPressHandlers = [
    handlePress1,
    handlePress2,
    handlePress3,
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

export default Simulado5;
