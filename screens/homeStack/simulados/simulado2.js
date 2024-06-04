import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Dropdown from '../../../components/home/simulado/Dropdown';
import FloatingBubbles from '../../../components/home/simulado/bubble';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//não consegui trabalhar com os Wrappers para reaproveitar o TemplateScreen, só trocando se o Button ou Dropdown seria usado

const ViewBox = props => (
  <View style={[props.style, { backgroundColor: 'white' }]}>
    {props.children}
  </View>
);

const Simulado2 = ({ route }) => {

  const navigation = useNavigation();
  const data = [
    { label: 'Nenhum ', value: 'optionA' },
    { label: 'Era Vargas', value: 'optionB' },
    { label: 'Segundo Reinado', value: 'optionC' },
    { label: 'Brasil Colônia', value: 'optionD' },
  ];

  const handleSelect = (item) => {
    navigation.navigate('Simulado3', { ...route.params, topic: item });
  };

  const backPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <FloatingBubbles numBubbles={30} />
      <View style={styles.header}>
        <TouchableOpacity onPress={backPress}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <ViewBox style={styles.mainBox}>
        <Text style={styles.title}>Qual assunto você deseja?</Text>
        <Dropdown style={styles.dropdownEstilo} data={data} onSelect={handleSelect} />

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
    minHeight: 180,
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

export default Simulado2;
