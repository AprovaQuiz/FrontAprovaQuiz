import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaInicial = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={{uri:"https://i.pinimg.com/736x/1f/90/45/1f904556330b94f4846a334ff79ee7e0.jpg"}} style={styles.imagem} />
            
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo1}>Bem-</Text>
                <Text style={styles.titulo2}>Vindo</Text>
            </View>
            
            <TouchableOpacity style={styles.botaoReg}>
                <Text style={styles.botaoTexto}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoLog}>
                <Text style={styles.botaoTexto}>Login</Text>
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: 270,
        height: 320,
        marginBottom: 50,
    }, 
    botaoLog: {
        marginTop: 25,
        width: 280,
        height: 50,
        backgroundColor: '#252525',
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
      },
      botaoReg:{
        marginTop: 25,
        width: 280,
        height: 50,
        backgroundColor: '#8A45ED',
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
      },
      botaoTexto: {
        color: '#ffff',
        fontWeight: 'bold'
      },
      tituloContainer:{
        flexDirection: 'row'
      },
      titulo1: {
        color: '#252525',
        fontWeight: 'bold',
        fontSize: 50
      },
      titulo2: {
        color: '#8A45ED',
        fontWeight: 'bold',
        fontSize: 50
      }
})

export default TelaInicial;