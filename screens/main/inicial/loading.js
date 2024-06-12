import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import storage from '../../../config/storage';
import { axiosAprovaApi } from '../../../config/http';

const LoadingScreen = ({ navigation }) => {

  async function handleLogin() {
    storage.load({ key: 'stayConnected' })
      .then(async (ret) => {
        if (ret == true) {
          await axiosAprovaApi.get('/users/myuser')
            .then(() => {
              return navigation.replace('Main');
            })
            .catch((e) => {
              console.log(e)
            })
        } else {
          return navigation.replace('CadLogin')
        }
      })
      .catch(() => {
        return navigation.replace('CadLogin')
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleLogin()
    }, 1000);

    return () => clearTimeout(timer);
  }, [handleLogin]);

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
