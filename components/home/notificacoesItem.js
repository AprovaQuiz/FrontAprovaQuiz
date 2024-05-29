import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotificacoesItem = ({ descricao }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#8A45ED" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F4F4',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  content: {
    flex: 1,
  },
  descricao: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginLeft: 8,
  },
});

export default NotificacoesItem;
