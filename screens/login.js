import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";



const TelaLogin = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="arrow-back-outline" size={24} color="#3C1673" />
            </TouchableOpacity>
            <Text style={styles.titulo}>Oi, tudo bem?👋</Text>
            <Text style={styles.subTitulo}>Seja bem-vindo(a) de volta!</Text>
            <View style={styles.inputContainer}>
                <Text>E-mail</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
                <Text>Senha</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.checkContainer}>
                <Checkbox />
                <Text>Manter Conectado?</Text>
            </View>
            <View style={styles.endContainer}>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoCad}>
                    <Text style={styles.botaoTexto}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingLeft: 20,
        flex: 1
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 20
    },
    subTitulo: {
        fontSize: 20
    },
    inputContainer: {
        marginTop: 80,
    },
    input: {
        width: 350,
        borderBottomColor: "#252525",
        borderBottomWidth: 1,
        padding: 8
    },
    checkContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    endContainer: {
        alignItems: 'center',
        marginTop: 40,
        
    },
    forgotText: {
        color: '#3C1673',
        marginRight: 20,
        marginTop: 20
    },
    botaoCad:{
        marginTop: 40,
        width: 280,
        height: 50,
        backgroundColor: '#8A45ED',
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
      },
      botaoTexto: {
        color: '#ffff',
        fontWeight: 'bold'
      },
})

export default TelaLogin;