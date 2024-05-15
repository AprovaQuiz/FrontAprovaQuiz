import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 

const MenuButton = ({ title, iconName, onPress, isLast }) => {
  return (
    <TouchableOpacity
      style={[styles.item, isLast && styles.lastItem]}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={24} color="#3C1673" backgroundColor='rgba(138, 69, 237, 0.16)' />
        </View>
        <Text style={styles.buttonTitle}>{title}</Text>
        {!isLast && <Ionicons name="arrow-forward-outline" size={24} color="#3C1673" />}
      </View>
    </TouchableOpacity>
  );
};

const Config = () => {
  const navigation = useNavigation(); // Obtém o objeto de navegação

  const handleLogout = () => {
    // Lógica para lidar com o logout
    console.log('Logout executado');
  };

  const navigateToNotifications = () => {
    // Navega para a página de notificações de perfil
    navigation.navigate('NotificacoesPerfil');
  };

  return (
    <View style={styles.menuContainer}>
      <MenuButton title="Informações Pessoais" iconName="person" />
      <MenuButton title="Senha" iconName="lock-closed" />
      <MenuButton title="Notificações" iconName="notifications" onPress={navigateToNotifications}/>
      <MenuButton title="Sair" iconName="exit" onPress={handleLogout} isLast />
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: 'red',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    flex: 1, 
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(138, 69, 237, 0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonTitle: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default Config;
