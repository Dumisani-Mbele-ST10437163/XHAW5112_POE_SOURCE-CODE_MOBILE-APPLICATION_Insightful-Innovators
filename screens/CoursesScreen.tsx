import React from 'react';
import {Image, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { LinearGradient } from 'expo-linear-gradient';

type courseScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function CoursesScreen() {

  const navigation = useNavigation<courseScreenProp>();

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#b5d3ef', paddingBottom: 200 }}>
      
        <LinearGradient
          // Adjusted Background Linear Gradient
          colors={['#c6ffbd', '#80aedc']}
          style={styles.background}
        />

      <View style={styles.logoContainer}>
        <Image source={require('../img/logos/logo_noBG.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Empowering The Nation</Text>
      </View>

      <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#07416d' }}>Six-Week Courses</Text>

      <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 30 }}>
        <TouchableOpacity style={[styles.textColor, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('CookingDetailsScreen')}>
          <Text style={{ color: 'white' }}> Cooking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.textColor, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('ChildMindingDetailsScreen')}>
          <Text style={{ color: 'white' }}> Child Minding</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.textColor, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('GardenMaintenanceDetailsScreen')}>
          <Text style={{ color: 'white' }}> Garden Maintenance</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center', color: '#07416d'}}>Six-month Courses</Text>

      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <TouchableOpacity style={[styles.textColor, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('FirstAidDetailsScreen')}>
          <Text style={{ color: 'white' }}> First Aid</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.textColor, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('SewingDetailsScreen')}>
          <Text style={{ color: 'white' }}>Sewing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.textColor, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('LifeSkillsDetailsScreen')}>
          <Text style={{ color: 'white' }}> Life Skills</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.textColor, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('LandscapingDetailsScreen')}>
          <Text style={{ color: 'white' }}> Landscaping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
