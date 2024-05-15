import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HistoricoItem = ({ titulo, nivel, realizadoEm, imagemUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: imagemUrl }}
            style={styles.image}
          />
          <View style={styles.infoBadge}>
            <Text style={styles.infoText}>16qs</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{titulo}</Text>
          <Text style={styles.subtitle}>{nivel}</Text>
          <Text style={styles.date}>Realizado em: {realizadoEm}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <FontAwesome name="trash" size={20} color="#8A45ED" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    margin: 0,
  },
  image: {
    height: 100,
    width: 130,
    margin: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  deleteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  infoBadge: {
    position: 'absolute',
    bottom: 5,
    left: 8,
    backgroundColor: '#8A45ED',
    padding: 5,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 17,
  },
  subtitle: {
    marginTop: 2,
  },
  date: {
    marginTop: 10,
    marginBottom: 10,
  }
});

export default HistoricoItem;
