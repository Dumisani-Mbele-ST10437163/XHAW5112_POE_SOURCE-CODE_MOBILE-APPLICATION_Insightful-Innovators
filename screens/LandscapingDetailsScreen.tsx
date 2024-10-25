import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'; // Added Image
import { LinearGradient } from 'expo-linear-gradient';

const LandscapingDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

        <LinearGradient
          // Adjusted Background Linear Gradient
          colors={['#c6ffbd', '#80aedc']}
          style={styles.background}
        />

      <View style={styles.content}>
      <View style={styles.logoContainer}>
  {/* Replace Ionicons with Image */}
  <Image source={require('../_img/logo.png')} style={styles.logoImage} />
  <Text style={styles.logoText}>Empowering The Nation</Text>
</View>

        
        <Text style={styles.title}>Landscaping</Text>
        
        <View style={styles.feeContainer}>
          <Text style={styles.feeLabel}>Fees: </Text>
          <Text style={styles.feeAmount}>R1500</Text>
        </View>
        
        <View style={styles.feeContainer}>
          <Text style={styles.feeLabel}>Length: </Text>
          <Text style={styles.feeAmount}>6-Months</Text>
        </View>

        <View style={styles.purposeContainer}>
          <Text style={styles.sectionTitle}>Purpose:</Text>
          <Text style={styles.purposeText}>
          Provide landscaping services for new & established gardens
          </Text>
        </View>
        
        <View style={styles.learningContainer}>
          <Text style={styles.sectionTitle}>What You'll Learn:</Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>• Indigenous + exotic plants & trees</Text>
            <Text style={styles.bulletPoint}>• Fixed structures e.g. fountains, statues, trenches, tables etc.</Text>
            <Text style={styles.bulletPoint}>• Balancing of plants and trees in a garden</Text>
            <Text style={styles.bulletPoint}>• Aesthetics of plants, shapes & colors</Text>
            <Text style={styles.bulletPoint}>• Garden layout</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  content: {
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',       // Horizontal alignment
    alignItems: 'center',       // Vertical alignment
    marginBottom: 20,
  },
  logoImage: {
    width: 60,                 // Adjust the size as needed
    height: 80,                // Adjust the size as needed
    marginRight: 10,           // Space between the logo and the text
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#07416d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color:'#07416d'
  },
  feeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  feeAmount: {
    fontSize: 16,
    color: '#07416d', 
  },
  feeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#07416d',
  },
  purposeContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#07416d',
  },
  purposeText: {
    fontSize: 16,
    color: '#07416d',
  },
  learningContainer: {
    marginBottom: 20,
    color: '#07416d',

  },
  bulletPoints: {
    marginLeft: 10,
    
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    color: '#07416d',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default LandscapingDetailsScreen;
