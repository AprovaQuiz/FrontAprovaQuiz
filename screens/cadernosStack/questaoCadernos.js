import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import QuestaoVestibular from '../../components/cadernos/cadernoQuestao';

const QuestaoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { questao, assuntoNome } = route.params;

  const navigateToConclusao = () => {
    navigation.navigate('Conclusao');
  };

  return (
    <ScrollView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#3C1673" />
            </TouchableOpacity>
          </View>
          <View>
            <QuestaoVestibular questao={questao} />
          </View>
        </View>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navigationButton}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={36}
              color="#3C1673"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={navigateToConclusao}>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={36}
              color="#3C1673"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navigationButton: {
    padding: 10,
  },
});

export default QuestaoScreen;