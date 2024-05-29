import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const FloatingBubbles = ({ numBubbles }) => {
  const bubbles = [];
  for (let i = 0; i < numBubbles; i++) {
    const size = Math.random() * 20 + 10; // Tamanho aleatório para as bolinhas
    const x = Math.random() * width; // Posição x aleatória dentro da largura da tela
    const y = Math.random() * height; // Posição y aleatória dentro da altura da tela

    bubbles.push(
      <Circle key={i} cx={x} cy={y} r={size} fill="rgba(255, 255, 255, 0.1)" />
    );
  }

  return (
    <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
      <Rect width={width} height={height} fill="#8A45ED" />
      {bubbles}
    </Svg>
  );
};

export default FloatingBubbles;
