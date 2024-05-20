import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/home';
import CadernosLista from './screens/cadernosLista';
import HistoricoScreen from './screens/historico';
import PerfilScreen from './screens/perfil';
import NoticiasLista from './screens/noticiasLista';
import MateriasLista from './screens/materiasLista';
import NotificacoesPerfil from './screens/notificacoesPerfil';
import Estatisticas from './screens/estatisticas';
import Notificacoes from './screens/notificacoes';
import Header from './components/header';
import TelaInicial from './screens/telaInicial';
import TelaLogin from './screens/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header /> }}/>
    <Stack.Screen name="Notícias" component={NoticiasLista} options={{ headerShown: false }} />
    <Stack.Screen name="Notificações" component={Notificacoes} options={{ headerShown: false }} />
    <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const CadernosStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CadernosLista" component={CadernosLista} options={{ headerShown: false }} />
    <Stack.Screen name="MateriasLista" component={MateriasLista} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const PerfilStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="PerfilScreen" component={PerfilScreen} options={{ header: () => <Header /> }}/>
    <Stack.Screen name="NotificacoesPerfil" component={NotificacoesPerfil} options={{ headerShown: false }} />
    <Stack.Screen name="Estatisticas" component={Estatisticas} options={{ headerShown: false }} />
    <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown: false}} />
    <Stack.Screen name="TelaLogin" component={TelaLogin} options={{headerShown: false}} />
  </Stack.Navigator>
);


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cadernos') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'Histórico') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#8A45ED',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 13,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Cadernos" component={CadernosStack} options={{ headerShown: false }} />
        <Tab.Screen name="Histórico" component={HistoricoScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Perfil" component={PerfilStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
