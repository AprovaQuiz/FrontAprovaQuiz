import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icon.png')}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.text}>
          <Text style={[styles.aprova, styles.aprovaQuiz]}>Aprova</Text>
          <Text style={[styles.quiz, styles.aprovaQuiz]}>Quiz</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="bell" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
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
  },
  button: {
    marginLeft: 10,
  },
};

export default Header;
