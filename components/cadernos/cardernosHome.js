import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardCadernos from './cardCadernos';
import cadernos from '../../data/cadernos';

const CadernosScreen = () => {
  const navigation = useNavigation();

  const handleCardClick = (caderno) => {
    // Navegar para MateriasLista com a categoria do caderno
    navigation.navigate('MateriasLista', { categoria: caderno.categoria });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cadernos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardCadernos cadernos={[item]} onCardClick={handleCardClick} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 25,
  },
});

export default CadernosScreen;
