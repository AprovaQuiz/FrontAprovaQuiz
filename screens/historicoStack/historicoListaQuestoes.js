import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Card from '../../components/historico/historicoQuestao';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ListaDeQuestoes = () => {
  const navigation = useNavigation();

  const navigateToPesquisa = () => {
    navigation.navigate('Pesquisa');
  };


  const route = useRoute();
  const { questoes } = route.params || { questoes: [] };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Text style={styles.historicoTitle}>Histórico</Text>
          <TouchableOpacity style={styles.searchButton} onPress={navigateToPesquisa}>
            <Ionicons name="search-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={questoes}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item, index }) => <Card questaoAnswered={item} index={index} />}
        />
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
});

export default ListaDeQuestoes;
