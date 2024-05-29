import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const User = () => {
  return (
    <View style={styles.userItem}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/17/17004.png' }} style={styles.characterImage} />
        <View style={styles.userTextContainer}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.username}>@nomedeusuario</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  characterImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  userTextContainer: {
    flex: 1,
  },
  name: {
    color: '#2c221f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    color: '#2c221f',
  },
});


export default User;
