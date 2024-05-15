import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SwitchButton = ({ title, onToggle, isOn, isLast }) => {
  const toggleSwitch = () => {
    onToggle(!isOn);
  };

  return (
    <TouchableOpacity
      style={[styles.item, isLast && styles.lastItem]}
      onPress={toggleSwitch}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonTitle}>{title}</Text>
        <View
          style={[
            styles.toggleContainer,
            isOn ? styles.activeToggle : styles.inactiveToggle,
          ]}>
          <View
            style={[
              styles.toggleCircle,
              isOn ? styles.activeCircle : styles.inactiveCircle,
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const NotificacoesPerfil = () => {
  const navigation = useNavigation();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [newContentEnabled, setNewContentEnabled] = useState(true);

  return (
    <ScrollView style={styles.notificacoesPerfil}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3C1673" />
        </TouchableOpacity>
        <Text style={styles.notificacoesTitle}>Notificações</Text>
      </View>
      <View style={styles.menuContainer}>
        <SwitchButton
          title="Ativar Notificações"
          onToggle={setNotificationsEnabled}
          isOn={notificationsEnabled}
        />
        <SwitchButton
          title="Lembretes Diários"
          onToggle={setRemindersEnabled}
          isOn={remindersEnabled}
        />
        <SwitchButton
          title="Novos Conteúdos"
          onToggle={setNewContentEnabled}
          isOn={newContentEnabled}
          isLast
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificacoesPerfil: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  menuContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonTitle: {
    fontSize: 16,
    color: '#333',
  },
  toggleContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 2,
    justifyContent: 'center',
  },
  toggleCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  activeToggle: {
    backgroundColor: '#3C1673', // Cor de fundo quando ativado
    borderColor: '#3C1673', // Cor da borda quando ativado
  },
  inactiveToggle: {
    backgroundColor: '#ccc', // Cor de fundo quando desativado
    borderColor: '#ccc', // Cor da borda quando desativado
  },
  activeCircle: {
    backgroundColor: '#FFF', // Cor do círculo quando ativado
    transform: [{ translateX: 18 }], // Posição à direita quando ativado
  },
  inactiveCircle: {
    backgroundColor: '#FFF', // Cor do círculo quando desativado
    transform: [{ translateX: 2 }], // Posição à esquerda quando desativado
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

export default NotificacoesPerfil;
