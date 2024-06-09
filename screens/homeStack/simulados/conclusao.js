import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import storage from '../../../config/storage';

const { width, height } = Dimensions.get('window');

const ConclusaoSimulado = ({ navigation, route }) => {

    console.log(route.params)

    useEffect(() => {
        storage.remove({ key: 'questions' })
    }, [])

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
                            navigation.navigate('Home')
                            return navigation.navigate('Histórico');
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