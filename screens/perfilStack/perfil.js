import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Usuario from '../../components/perfil/user';
import Config from '../../components/perfil/config';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const PerfilScreen = () => {
  const navigation = useNavigation(); 

  const navigateToEstatisticas = () => {
    navigation.navigate('Estatisticas');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Usuario />
        <View style={styles.divider} />
        <View style={styles.estatisticas}>
          <View style={styles.item}>
            <Text style={styles.textBold}>15 </Text>
            <Text style={styles.text}>Temas estudados</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.textBold}>5 </Text>
            <Text style={styles.text}>Simulados finalizados</Text>
          </View>

          <View style={styles.item}>
            <TouchableOpacity style={styles.buttonContainer} onPress={navigateToEstatisticas} >
              <Text style={styles.buttonText}>Ver Tudo</Text>
              <Ionicons name="arrow-forward-outline" size={24} color="#3C1673" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.header}>
          <Text style={styles.configTitle}>Configurações</Text>
        </View>
        <Config />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: '5%',
  },
  estatisticas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3C1673',
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3C1673',
  },
  buttonText: {
    color: '#3C1673',
    marginRight: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  configTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: '5%',
    marginTop: 20,
    color: '#3C1673',
  },
});

export default PerfilScreen;
