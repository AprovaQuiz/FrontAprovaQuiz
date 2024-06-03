import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/homeStack/home';
import CadernosLista from './screens/cadernosStack/cadernosLista';
import HistoricoScreen from './screens/historicoStack/historico';
import PerfilScreen from './screens/perfilStack/perfil';
import NoticiasLista from './screens/homeStack/noticiasLista';
import MateriasLista from './screens/cadernosStack/materiasLista';
import NotificacoesPerfil from './screens/perfilStack/notificacoesPerfil';
import Estatisticas from './screens/perfilStack/estatisticas';
import Notificacoes from './screens/homeStack/notificacoes';
import Senha from './screens/perfilStack/senha';
import InfosPessoais from './screens/perfilStack/infosPessoais';
import Header from './components/header';
import HistoricoListaQuestoes from './screens/historicoStack/historicoListaQuestoes';
import QuestaoScreen from './screens/historicoStack/questaoHistorico';
import Pesquisa from './screens/main/pesquisa';
import AssuntosListagem from './screens/cadernosStack/assuntosLista';
import CadernosListaQuestoes from './screens/cadernosStack/cadernosListaQuestoes';
import QuestaoScreenCadernos from './screens/cadernosStack/questaoCadernos';
import Conclusao from './screens/cadernosStack/conclusaoAssunto';
import Simulado1 from './screens/homeStack/simulados/simulado1';
import Simulado2 from './screens/homeStack/simulados/simulado2';
import Simulado3 from './screens/homeStack/simulados/simulado3';
import Simulado4 from './screens/homeStack/simulados/simulado4';
import Simulado5 from './screens/homeStack/simulados/simulado5';
import Simulado6 from './screens/homeStack/simulados/simulado6';


import LoadingScreen from './screens/main/inicial/loading';
import CadLogin from './screens/main/inicial/cadLogin';
import ConfirmationScreen from './screens/main/inicial/cadastro/confirmation';
import SignUpScreen from './screens/main/inicial/cadastro/signUp'
import LoginScreen from './screens/main/inicial/login/login'
import VerifyEmailScreen from './screens/main/inicial/login/verifyEmail';
import ForgotPasswordScreen from './screens/main/inicial/login/forgotPassword';
import ResetPasswordScreen from './screens/main/inicial/login/resetPassword';
import { navigationRef } from './config/RootNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header /> }} />
    <Stack.Screen name="Notícias" component={NoticiasLista} options={{ headerShown: false }} />
    <Stack.Screen name="Notificações" component={Notificacoes} options={{ headerShown: false }} />
    <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
    <Stack.Screen name="Simulado1" component={Simulado1} options={{ headerShown: false }} />
    <Stack.Screen name="Simulado2" component={Simulado2} options={{ headerShown: false }} />
    <Stack.Screen name="Simulado3" component={Simulado3} options={{ headerShown: false }} />
    <Stack.Screen name="Simulado4" component={Simulado4} options={{ headerShown: false }} />
    <Stack.Screen name="Simulado5" component={Simulado5} options={{ headerShown: false }} />
    <Stack.Screen name="Simulado6" component={Simulado6} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const CadernosStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CadernosLista" component={CadernosLista} options={{ headerShown: false }} />
    <Stack.Screen name="MateriasLista" component={MateriasLista} options={{ headerShown: false }} />
    <Stack.Screen name="AssuntosListagem" component={AssuntosListagem} options={{ headerShown: false }} />
    <Stack.Screen name="QuestaoLista" component={CadernosListaQuestoes} options={{ headerShown: false }} />
    <Stack.Screen name="QuestaoScreenCadernos" component={QuestaoScreenCadernos} options={{ headerShown: false }} />
    <Stack.Screen name="Conclusao" component={Conclusao} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const HistoricoStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HistoricoScreen" component={HistoricoScreen} options={{ headerShown: false }} />
    <Stack.Screen name="HistoricoLista" component={HistoricoListaQuestoes} options={{ headerShown: false }} />
    <Stack.Screen name="QuestaoScreen" component={QuestaoScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const PerfilStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="PerfilScreen" component={PerfilScreen} options={{ header: () => <Header /> }} />
    <Stack.Screen name="NotificacoesPerfil" component={NotificacoesPerfil} options={{ headerShown: false }} />
    <Stack.Screen name="Estatisticas" component={Estatisticas} options={{ headerShown: false }} />
    <Stack.Screen name="Senha" component={Senha} options={{ headerShown: false }} />
    <Stack.Screen name="InfosPessoais" component={InfosPessoais} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainTabs = () => (
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
    <Tab.Screen name="Histórico" component={HistoricoStack} options={{ headerShown: false }} />
    <Tab.Screen name="Perfil" component={PerfilStack} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="CadLogin"
          component={CadLogin}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        /><Stack.Screen
          name="Login"
          component={LoginScreen}

          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmailScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="ResetPassword" component={ResetPasswordScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false, tabBarVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;