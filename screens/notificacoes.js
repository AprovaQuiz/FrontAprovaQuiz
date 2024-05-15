import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import NotificacoesItem from '../components/home/notificacoesItem';
import notificacoes from '../data/notificacoesData';
import { Ionicons } from '@expo/vector-icons';

const Notificacoes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <Text style={styles.notificacoesTitle}>Notificações</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {notificacoes.map((notificacao) => (
          <NotificacoesItem
            key={notificacao.id}
            descricao={notificacao.descricao}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  notificacoesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Notificacoes;
