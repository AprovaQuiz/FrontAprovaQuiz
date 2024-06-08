import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import storage from '../../../config/storage';
import QuestaoSimulado from '../../../components/Simulado/cadernoQuestao';


const QuestaoSimuladoScreen = ({ route }) => {
    const navigation = useNavigation();

    const questionsParams = route.params;

    const [question, setQuestion] = useState({})
    const [questionsLength, setQuestionLength] = useState(0)

    storage.load(
        { key: 'questions' }
    )
        .then(ret => {
            setQuestion(ret[questionsParams.index])
            setQuestionLength(ret.length)

        })
        .catch(e => {
            console.log(e)
        })

    function backScreen() {
        return navigation.navigate('QuestaoSimulado', {
            index: questionsParams.index - 1
        })
    }


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
                        {question.alternativas && <QuestaoSimulado questao={question} length={questionsLength} currentIndex={questionsParams.index} />}
                    </View>
                </View>
                <View style={styles.navigationButtons}>
                    {questionsParams.index != 0 &&
                        <TouchableOpacity
                            onPress={() => { backScreen() }}
                            style={styles.navigationButton}>

                            <Ionicons
                                name="arrow-back-circle-outline"
                                size={36}
                                color="#3C1673"
                            />
                        </TouchableOpacity>

                    }

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

export default QuestaoSimuladoScreen;