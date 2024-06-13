import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
var Buffer = require('buffer/').Buffer

const User = ({ props }) => {

  function image() {
    if ((props.image != null || typeof props.image != 'undefined') && props.image?.img != null) {

      return `data:image/png;base64,${Buffer.from(props.image.img.data).toString('base64')}`
    } else {
      return `https://cdn-icons-png.flaticon.com/512/17/17004.png`
    }
  }


  return (
    <View style={styles.userItem}>
      <Image source={{ uri: image() }} style={styles.characterImage} />
      <View style={styles.userTextContainer}>
        <Text style={styles.name}>{props.nome}</Text>
        <Text style={styles.username}>@{props.userName}</Text>
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
    alignContent: 'center',
    justifyContent: 'center'
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
