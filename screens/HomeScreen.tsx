import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { styles } from './Styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#b5d3ef', paddingHorizontal: 16, paddingVertical: 20 }}>
      

        <LinearGradient
          // Adjusted Background Linear Gradient
          colors={['#c6ffbd', '#80aedc']}
          style={styles.background}
        />

      {/* Logo and Heading */}
      <View style={[styles.container, { marginBottom: 20 }]}>
        <Image 
          style={[styles.ImageSize, { height: 80, width: 80, resizeMode: 'contain', marginBottom: 10 }]} 
          source={require('../img/logo_noBG.png')} 
        />
        <Text style={styles.text}>Empowering the Nation</Text>
      </View>
      
      {/* Main Image and Vision Section */}
      <View style={styles.view2}>
        <Image 
          style={{ height: 120, width: 350, resizeMode: 'contain', marginTop: 10, borderRadius: 15 }} 
          source={require('../img/our_courses.png')} 
        />
        <Text style={styles.text2}>Our Vision</Text>
        <Text style={styles.text3}>
          Empowering the nation is an initiative founded by Precious Radebe; aimed at providing skills for domestic workers and gardeners. 
          We bridge the gap for individuals who may not have had the chance to upskill themselves or obtain a formal educational qualification, 
          offering the opportunity to educate themselves through various training programs. Our training programs aim to increase pay rates, 
          marketability, education, and entrepreneurship skills for individuals who participate.
        </Text>
      </View>
    </ScrollView>
  );
};
