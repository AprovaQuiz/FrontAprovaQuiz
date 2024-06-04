import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
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

const Simulado4 = ({ route }) => {
  const navigation = useNavigation();

  console.log(route.params)
  const backPress = () => {
    navigation.goBack()
  }

  // vo botar uma consulta, e salvar na memória local as questões
  // aqui que sipa eu vou chorar

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
