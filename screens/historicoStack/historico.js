import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HistoricoItem from '../../components/historico/historicoItem';
import Filtro from '../../components/historico/filtros';
import { useNavigation } from '@react-navigation/native';
import { axiosAprovaApi } from '../../config/http';
import storage from '../../config/storage';

const Historico = () => {
  const navigation = useNavigation();
  storage.remove({ key: 'questions' })

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToPesquisa = () => {
    navigation.navigate('Pesquisa');
  };


  const [historic, setHistoric] = useState({});
  const handleGet = useCallback(async () => {

    await axiosAprovaApi.get(`/historics/myHistorics`)
      .then(r => {
        setHistoric(r.data)
      })
      .catch(e => {
        console.log(e)
      })

  }, [])

  useEffect(() => {
    handleGet()
  }, [handleGet])


  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const navigateToHistoricoLista = () => {
    setModalVisible(false);
    navigation.navigate('HistoricoLista', { questoes: selectedItem.questoes });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateToHome}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Text style={styles.historicoTitle}>Histórico</Text>
          <TouchableOpacity style={styles.searchButton} onPress={navigateToPesquisa}>
            <Ionicons name="search-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Filtro />
        <FlatList
          data={historic}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => {
            const date = new Date(item.createdAt)
            return (
              <TouchableOpacity onPress={() => handleItemPress(item)}>
                <HistoricoItem
                  id={item._id}
                  assunto={item.tipoSimulado?.assunto?.nome != undefined ? item.tipoSimulado?.assunto?.nome : "Geral"}
                  materia={item.tipoSimulado?.materia?.nome != undefined ? item.tipoSimulado?.materia?.nome : "Geral"}
                  pertence={item.tipoSimulado?.materia?.pertence != undefined ? item.tipoSimulado?.materia?.pertence : "Simulado Geral"}
                  questoesLength={item.questoesFeitas.length}
                  realizadoEm={"Realizado em: " + date.getUTCDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}
                />
              </TouchableOpacity>
            )
          }}
        />

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}>
                <Ionicons name="close" size={24} color="#8A45ED" />
              </TouchableOpacity>
              <View style={styles.modalHeader}>
                <Image
                  source={{ uri: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2023/05/teste-em-producao.webp" }}
                  style={styles.modalImage}
                />
                <View style={styles.modalInfo}>
                  <Text style={styles.modalTitle}>{selectedItem?.tipoSimulado?.materia?.pertence != undefined ? selectedItem.tipoSimulado?.materia?.pertence : "Geral"}</Text>
                  <Text style={styles.modalText}>{selectedItem?.tipoSimulado?.materia?.nome != undefined ? selectedItem.tipoSimulado?.materia?.nome : "Geral"}</Text>
                  <Text style={styles.modalText}>{selectedItem?.tipoSimulado?.assunto?.nome != undefined ? selectedItem.tipoSimulado?.assunto?.nome : "Geral"}</Text>
                  <Text style={styles.modalDate}>
                    {() => {
                      const date = new Date(item.createdAt)
                      return "Realizado em: " + date.getUTCDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
                    }}
                  </Text>
                </View>
              </View>
              <View style={styles.questoes}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="#50B06B"
                />
                <Text>
                  Número de <Text style={styles.acertosText}>acertos</Text>: {selectedItem?.qtdDeAcertos} questões
                </Text>
              </View>
              <View style={styles.questoes}>
                <Ionicons
                  name="close-circle-outline"
                  size={24}
                  color="#F41A1A"
                />
                <Text>
                  Número de <Text style={styles.errosText}>erros</Text>: {selectedItem?.qtdDeErros} questões
                </Text>
              </View>
              <TouchableOpacity
                style={styles.visualizarButton}
                questoes={selectedItem?.questoes}
                onPress={navigateToHistoricoLista}>
                <Text style={styles.visualizarButtonText}>
                  Visualizar Questões
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  historicoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchButton: {
    marginLeft: 'auto',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  modalImage: {
    height: 100,
    width: 130,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 10,
  },
  modalInfo: {
    flex: 1,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  modalText: {
    marginTop: 2,
    fontSize: 15,
  },
  modalDate: {
    marginTop: 10,
    fontSize: 14,
    color: 'grey',
  },
  questoes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  acertosText: {
    color: '#50B06B',
    fontWeight: 'bold',
  },
  errosText: {
    color: '#F41A1A',
    fontWeight: 'bold',
  },
  visualizarButton: {
    backgroundColor: '#8A45ED',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#3C1673',
  },
  visualizarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Historico;
