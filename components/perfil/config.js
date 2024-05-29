import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MenuButton = ({ title, iconName, onPress, isLast }) => {
  return (
    <TouchableOpacity
      style={[styles.item, isLast && styles.lastItem]}
      onPress={onPress}>
      <View style={styles.buttonContent}>
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={24} color="#3C1673" />
        </View>
        <Text style={styles.buttonTitle}>{title}</Text>
        {!isLast && (
          <Ionicons name="arrow-forward-outline" size={24} color="#3C1673" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const Config = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    console.log('Logout executado');
    setShowModal(false); 
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigateToInfosPessoais = () => {
    navigation.navigate('InfosPessoais');
  };

  const navigateToNotifications = () => {
    navigation.navigate('NotificacoesPerfil');
  };

  const navigateToKeys = () => {
    navigation.navigate('Senha');
  };
  

  return (
    <View style={styles.menuContainer}>
      <MenuButton title="Informações Pessoais" iconName="person" onPress={navigateToInfosPessoais}/>
      <MenuButton title="Senha" iconName="lock-closed" onPress={navigateToKeys}/>
      <MenuButton
        title="Notificações"
        iconName="notifications"
        onPress={navigateToNotifications}
      />
      <MenuButton title="Sair" iconName="exit" onPress={handleLogout} isLast />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sair</Text>
            <Text style={styles.modalText}>Tem certeza de que deseja sair?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonYes} onPress={confirmLogout}>
                <Text style={styles.buttonText}>Sim, sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 20,
    flex: 1,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#F41A1A',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  modalButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#8A45ED',
    borderBottomWidth: 3, 
    borderBottomColor: '#3C1673', 
  },
  modalButtonYes: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#F34242',
    borderBottomWidth: 3, 
    borderBottomColor: '#F41A1A', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Config;
