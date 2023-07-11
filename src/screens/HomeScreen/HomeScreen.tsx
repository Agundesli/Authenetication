import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './HomeScreenStyle';
import bad from '../../../assets/images/bad.jpg'

const Home = () => {
  return (
    <View>
      <Text style={styles.container}>Welcome Albuquerque City</Text>
      <Image
        source={bad} style={styles.logo}
        resizeMode="contain"
      />
      
    </View>
  );
};

export default Home;