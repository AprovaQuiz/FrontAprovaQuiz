import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoricoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Historico Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HistoricoScreen;