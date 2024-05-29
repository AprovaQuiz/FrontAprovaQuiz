import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const Header = () => {
  const navigation = useNavigation(); 
  
  const navigateToPesquisa = () => {
    navigation.navigate('Pesquisa'); 
  };

  const navigateToNotificacoes = () => {
    navigation.navigate('Notificações');
  };
  
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.text}>
          <Text style={[styles.aprova, styles.aprovaQuiz]}>Aprova</Text>
          <Text style={[styles.quiz, styles.aprovaQuiz]}>Quiz</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToPesquisa}>
          <Ionicons name="search-outline" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToNotificacoes}>
          <Ionicons name="notifications-outline" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'LeagueSpartan',
  },
  aprova: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'LeagueSpartan',
  },
  quiz: {
    color: '#8A45ED',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'LeagueSpartan',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  button: {
    marginLeft: 10,
  },
});

export default Header;
