import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Estatisticas = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.estatisticasPerfil}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <Text style={styles.estatisticasTitle}>Estatísticas</Text>
      </View>

      <View>
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
            <Text style={styles.textBold}>751/1000 </Text>
            <Text style={styles.text}>Média de acertos</Text>
          </View>
          
        </View>

        <View style={styles.divider} />

        <View style={styles.estatisticas}>
          <View style={styles.item}>
            <Text style={styles.textBold}>8h</Text>
            <Text style={styles.text}>Tempo médio por assunto</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.textBold}>40min </Text>
            <Text style={styles.text}>Tempo médio por simulado</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.textBold}>5min </Text>
            <Text style={styles.text}>Tempo médio por questão</Text>
          </View>

          
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  estatisticasPerfil: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  estatisticasTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20,
  },
  estatisticas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: -10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 10,
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
});

export default Estatisticas;
