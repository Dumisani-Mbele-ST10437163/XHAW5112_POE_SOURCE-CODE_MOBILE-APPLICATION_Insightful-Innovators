import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'; // Added Image
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
type courseScreenProp = StackNavigationProp<RootStackParamList, 'CalculateScreen'>;
const CookingDetailScreen = () => {
  const navigation = useNavigation<courseScreenProp>();
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
  <Image source={require('../img/logo_noBG.png')}style={styles.logoImage} />
  <Text style={styles.logoText}>Empowering The Nation</Text>
</View>

        
        <Text style={styles.title}>Cooking</Text>
        
        <View style={styles.feeContainer}>
          <Text style={styles.feeLabel}>Fees: </Text>
          <Text style={styles.feeAmount}>R1500</Text>
        </View>
        
        <View style={styles.purposeContainer}>
          <Text style={styles.sectionTitle}>Purpose:</Text>
          <Text style={styles.purposeText}>
            To Arovide Alterations and New Garment tailoring services
          </Text>
        </View>
        
        <View style={styles.learningContainer}>
          <Text style={styles.sectionTitle}>What You'll Learn:</Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>• Types of stitches</Text>
            <Text style={styles.bulletPoint}>• Threading a sewing Machine</Text>
            <Text style={styles.bulletPoint}>• Sewing buttons, zips, hems, seams</Text>
            <Text style={styles.bulletPoint}>• Alterations</Text>
            <Text style={styles.bulletPoint}>• Designing and sewing new garments</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.textColor} onPress={() => {
        navigation.navigate('CalculateScreen')
      }}>
        <Text style={{color: 'white'}}> Calculate Fees</Text>
      </TouchableOpacity>
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
    width: 80,                 // Adjust the size as needed
    height: 80,                // Adjust the size as needed
    marginRight: 10,           // Space between the logo and the text
  },
  logoText: {
    fontSize: 20,
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
  feeLabel: {
    fontSize: 16,
    color: '#00609e', 
  },
  feeAmount: {
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
    color: '#00609e',
  },
  learningContainer: {
    marginBottom: 20,
    color: '#00609e',

  },
  bulletPoints: {
    marginLeft: 10,
    
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    color: '#00609e',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  textColor: {
    marginTop: 80,
    marginHorizontal: 130, 
    backgroundColor: '#115b8f',
    padding: 6,
    borderRadius: 5
},
});

export default CookingDetailScreen;
