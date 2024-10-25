import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GardenMaintenanceDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#c6ffbd', '#80aedc']}
        style={styles.background}
      />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../_img/logo.png')} style={styles.logoImage} />
          <Text style={styles.logoText}>Empowering The Nation</Text>
        </View>
        
        <Text style={styles.title}>Child-Minding</Text>
        
        <View style={styles.feeContainer}>
          <Text style={styles.feeLabel}>Fees: </Text>
          <Text style={styles.feeAmount}>R750</Text>
        </View>
        
        <View style={styles.feeContainer}>
          <Text style={styles.feeLabel}>Length: </Text>
          <Text style={styles.feeAmount}>6-Weeks</Text>
        </View>

        <View style={styles.purposeContainer}>
          <Text style={styles.sectionTitle}>Purpose:</Text>
          <Text style={styles.purposeText}>
            To provide basic child and baby care
          </Text>
        </View>
        
        <View style={styles.learningContainer}>
          <Text style={styles.sectionTitle}>What You'll Learn:</Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>•  0-6Month baby needs</Text>
            <Text style={styles.bulletPoint}>• 7Months-1Year baby needs</Text>
            <Text style={styles.bulletPoint}>• Toddler needs</Text>
            <Text style={styles.bulletPoint}>• Educational toys</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 80,
    height: 80,
    marginRight: 10,
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
    flex: 1,
  },
});

export default GardenMaintenanceDetailsScreen;
