import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('CadLogin');
    }, 1000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c612dc3a94c6a17d8b3702b067b24332',
        }}
        style={styles.image}
      />
      <Text style={styles.text}>
        <Text style={styles.aprova}>Aprova</Text>
        <Text style={styles.quiz}>Quiz</Text>
      </Text>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8A45ED" />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  text: {
    marginTop: -50,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'LeagueSpartan',
  },
  aprova: {
    color: '#000000',
  },
  quiz: {
    color: '#8A45ED',
  },
  loadingContainer: {
    marginTop: 50,
  },
});

export default LoadingScreen;
