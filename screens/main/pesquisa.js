import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Filtro from '../../components/historico/filtros'; 

const Pesquisa = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const onChangeSearch = query => setSearchQuery(query);

  const onSearch = () => {
    // Lógica para realizar a pesquisa e atualizar os resultados
    console.log('Pesquisando por:', searchQuery);
    const searchResultsMock = [
      { id: '1', title: 'Resultado 1' },
      { id: '2', title: 'Resultado 2' },
      { id: '3', title: 'Resultado 3' },
    ];
    setSearchResults(searchResultsMock);
    setShowFilter(true); // Mostrar o filtro após a pesquisa
    Keyboard.dismiss(); // Fechar o teclado após a pesquisa
  };

  const onFilterSelect = (filterOption) => {
    console.log('Filtro selecionado:', filterOption);
    // Lógica para aplicar o filtro nos resultados da pesquisa
  };

  const renderItem = ({ item }) => (
    <View style={styles.resultItem}>
      <Text style={styles.resultText}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3C1673" />
          </TouchableOpacity>
          <Searchbar
            placeholder="Pesquisar"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onIconPress={onSearch}
            onSubmitEditing={onSearch} // Chamar a função de pesquisa ao pressionar Enter
            style={styles.searchbar}
            inputStyle={styles.searchbarInput}
          />
        </View>
        <View style={styles.filtro}>
        {showFilter && <Filtro onFilterSelect={onFilterSelect} />}
        </View>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  searchbar: {
    flex: 1,
    marginLeft: 10,
    borderRadius: 20,
  },
  searchbarInput: {
    fontSize: 16,
  },
  resultsContainer: {
    padding: 10,
  },
  resultItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  filtro:{
    marginHorizontal: 5
  }
});

export default Pesquisa;
