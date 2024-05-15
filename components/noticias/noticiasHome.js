import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import CardGrupos from './cardGrupos';
import grupos from '../../data/noticias/grupos';

const NoticiasHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal // Definindo a rolagem horizontal
        showsHorizontalScrollIndicator={false}>
        {grupos.map((grupo, index) => (
          <CardGrupos key={index} grupos={[grupo]} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

export default NoticiasHome;
