// TemplateScreen.js
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';
import FloatingBubbles from './bubble';
import { Ionicons } from '@expo/vector-icons';

const ViewBox = (props) => (
  <View style={[props.style, { backgroundColor: 'white' }]}>
    {props.children}
  </View>
);

function TemplateScreen({
  headerText, buttonColors, buttonTexts, backPress, setText
}) {


  return (
    <View style={styles.containerView}>
      <FloatingBubbles numBubbles={30} />
      <View style={styles.header}>
        <TouchableOpacity onPress={backPress}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <ViewBox style={styles.mainBox}>
        <Text style={styles.titulo}>{headerText}</Text>
        {headerText != "Qual a quantidade de questões você deseja?" ?
          buttonTexts.map((subject, index) => (
            <CustomButton
              key={index}
              text={subject.nome}
              color={buttonColors[index]}
              onPress={() => setText({
                nome: subject.nome,
                _id: subject._id
              })}
            />
          ))
          :
          buttonTexts.map((text, index) => (
            <CustomButton
              key={index}
              text={text}
              color={buttonColors[index]}
              onPress={() => setText(text)} />
          ))
        }
      </ViewBox>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mainBox: {
    flexShrink: 0,
    minWidth: 300,
    minHeight: 250,
    borderRadius: 20,
  },
  titulo: {
    color: '#8A45ED',
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    maxWidth: 300,
    marginBottom: 40,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    position: 'absolute',
    top: 30,
    left: 20,
  },
});

export default TemplateScreen;
