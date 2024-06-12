import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import storage from '../../../config/storage';
import { axiosAprovaApi } from '../../../config/http';


const { width, height } = Dimensions.get('window');

const ConclusaoSimulado = ({ navigation, route }) => {



    async function handleHistoric() {
        const questionsAnswered = route.params.questions
        let qtdDeAcertos = 0
        let qtdDeErros = 0

        await storage.load({ key: 'questions' })
            .then(async (ret) => {

                const auxQuestions = []

                questionsAnswered.map((e, index) => {
                    let acerto = null
                    if (e.respRegistrada == ret.questions[index].alternativaCorreta) {
                        qtdDeAcertos++;
                        acerto = true;

                    } else {
                        qtdDeErros++;
                        acerto = false;
                    }

                    return auxQuestions.push({
                        questao: e.questao,
                        respRegistrada: e.respRegistrada,
                        acerto: acerto
                    })
                })

                await axiosAprovaApi.post('/historics', {
                    questoesFeitas: auxQuestions,
                    qtdDeAcertos: qtdDeAcertos,
                    qtdDeErros: qtdDeErros,
                    tipoSimulado: {
                        materia: ret.id_Subject == "default" ?
                            undefined : ret.id_Subject,
                        assunto: ret.id_Topic == "default" ?
                            undefined : ret.id_Topic
                    }
                })
                    .then(() => {
                        navigation.reset({
                            routes: [{ name: 'Histórico' }, { name: 'Home' }],
                        });
                        return navigation.navigate('Histórico');
                    })
                    .catch(e => {
                        console.log(e);
                        alert('Algum Erro Ocorreu\nVoltando para Home')
                        return navigation.navigate('Home')
                    })
                    .finally(() => {
                        storage.remove({ key: 'questions' })
                    })

            })
            .catch(e => {
                console.log(e);
                alert('Algum Erro Ocorreu\nVoltando para Home')
                return navigation.navigate('Home')
            })


    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="checkmark-circle" size={100} color="#8A45ED" />
                        <View style={styles.ellipse} />
                        <View style={styles.ballsContainer}>
                            <View style={[styles.ball, styles.ballLarge]} />
                            <View style={[styles.ball, styles.ballSmall]} />
                        </View>
                    </View>
                    <Text style={styles.modalTitle}>Parabéns!</Text>
                    <Text style={styles.modalSubtitle}>
                        Você concluiu o Simulado
                    </Text>
                    <Text style={styles.modalSubtitle}>
                        Continue assim!
                    </Text>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => {
                            handleHistoric()
                        }}
                    >
                        <Text style={styles.modalButtonText}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 0,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
    },
    iconContainer: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 20,
    },
    ellipse: {
        position: 'absolute',
        top: 80,
        width: 120,
        height: 60,
        backgroundColor: '#EEEEEE',
        borderRadius: 30,
        zIndex: -1,
    },
    ballsContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ball: {
        position: 'absolute',
        backgroundColor: '#C59DFF',
        borderRadius: 50,
    },
    ballLarge: {
        width: 30,
        height: 30,
        top: -15,
        left: -40,
    },
    ballSmall: {
        width: 15,
        height: 15,
        top: -10,
        left: 40,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    modalSubtitle: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    modalButton: {
        width: 250,
        height: 50,
        marginBottom: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 15,
        marginVertical: 10,
        backgroundColor: '#8A45ED',
        borderBottomWidth: 4,
        borderColor: '#4B0082',
        shadowColor: '#4B0082',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ConclusaoSimulado;