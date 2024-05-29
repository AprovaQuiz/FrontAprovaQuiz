import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SwitchButton = ({ title, onToggle, isOn, isLast }) => {
  const toggleSwitch = () => {
    onToggle(!isOn);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <View
      style={[styles.item, isLast && styles.lastItem]}
      onPress={toggleSwitch}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonTitle}>{title}</Text>
        <TouchableOpacity
          style={[
            styles.toggleContainer,
            isOn ? styles.activeToggle : styles.inactiveToggle,
          ]}
          onPress={toggleSwitch}> 
          <View
            style={[
              styles.toggleCircle,
              isOn ? styles.activeCircle : styles.inactiveCircle,
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notificacoesPerfil: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 10,
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
    backgroundColor: '#3C1673', 
  },
  inactiveToggle: {
    backgroundColor: '#ccc', 
  },
  activeCircle: {
    backgroundColor: '#FFF', 
    transform: [{ translateX: 20 }], 
  },
  inactiveCircle: {
    backgroundColor: '#FFF', 
    transform: [{ translateX: 0 }], 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  notificacoesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default NotificacoesPerfil;
