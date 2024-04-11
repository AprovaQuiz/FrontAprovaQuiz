import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
