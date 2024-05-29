import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FiltrosHistorico = () => {
  const filtros = ['Tudo', 'Cadernos', 'Assuntos', 'Filtro'];
  const [filtroSelecionado, setFiltroSelecionado] = useState('Tudo');

  const handleSelecionarFiltro = (filtro) => {
    setFiltroSelecionado(filtro);
    // lógica para quando for selecionado
  };

  const renderItem = ({ item }) => {
    if (item === 'Filtro') {
      return (
        <BotaoFiltroEspecial
          texto="Filtro"
          onCimaPress={() => console.log('Seta para cima pressionada')}
          onBaixoPress={() => console.log('Seta para baixo pressionada')}
        />
      );
    }

    return (
      <BotaoFiltro
        label={item}
        selected={filtroSelecionado === item}
        onPress={() => handleSelecionarFiltro(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filtros}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

const BotaoFiltro = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.botao,
        selected ? styles.botaoSelecionado : styles.botaoNaoSelecionado,
      ]}
      onPress={onPress}>
      <Text style={[styles.textoBotao, selected ? styles.textoSelecionado : styles.textoNaoSelecionado]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const BotaoFiltroEspecial = ({ texto, onCimaPress, onBaixoPress }) => {
  return (
    <View style={styles.botaoFiltroEspecial}>
      <Text style={styles.textoBotao}>{texto}</Text>
      <View style={styles.setasContainer}>
        <TouchableOpacity onPress={onCimaPress}>
          <Ionicons name="arrow-up" size={24} color="#8A45ED" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onBaixoPress}>
          <Ionicons name="arrow-down" size={24} color="#8A45ED" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8A45ED',
    marginRight: 10,
  },
  botaoSelecionado: {
    backgroundColor: '#8A45ED',
    borderColor: '#8A45ED',
  },
  botaoNaoSelecionado: {
    backgroundColor: '#fff',
  },
  textoBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8A45ED',
    textAlign: 'center',
  },
  textoSelecionado: {
    color: '#fff',
  },
  textoNaoSelecionado: {
    color: '#8A45ED',
  },
  botaoFiltroEspecial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  setasContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
});

export default FiltrosHistorico;
