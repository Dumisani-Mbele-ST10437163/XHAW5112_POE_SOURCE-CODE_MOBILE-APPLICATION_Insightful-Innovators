import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';



const ContactScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: -26.192782337723795,
    longitude: 28.03078250072178,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selectedLocation, setSelectedLocation] = useState("current");

  const riverleaRegion = {
    latitude: -26.21326007707098,
    longitude: 27.97549517430856,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const glenhazelRegion = {
    latitude: -26.141380677115325,
    longitude: 28.103846274305415,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    switch (location) {
      case "current":
        setMapRegion({
          latitude: -26.192782337723795,
          longitude: 28.03078250072178,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        break;
      case "riverlea":
        setMapRegion(riverleaRegion);
        break;
      case "glenhazel":
        setMapRegion(glenhazelRegion);
        break;
    }
  };


  return (
    <SafeAreaView style={styles.safeArea}>

      <LinearGradient
        colors={['#c6ffbd', '#80aedc']}
        style={styles.background}
      />

<View style={styles.logoContainer}>
        <Image source={require('../img/logos/logo_noBG.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Empowering The Nation</Text>
      </View>

      <View style={styles.contactInfoContainer}>
        <Text style={styles.heading1}>Contact Us</Text>

        <Text style={styles.heading2}>Contact Number(s):</Text>
        <Text style={styles.text}>072-432-9265</Text>
        <Text style={styles.text}>063-568-552</Text>

        <Text style={styles.heading2}>Email:</Text>
        <Text style={styles.text}>info@empoweringthenation.co.za</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.heading2}>Select Location:</Text>
        <Picker
          selectedValue={selectedLocation}
          onValueChange={(value) => handleLocationChange(value)}
          style={styles.picker}
        >
          <Picker.Item label="Current Location" value="current" />
          <Picker.Item label="Riverlea" value="riverlea" />
          <Picker.Item label="Glenhazel" value="glenhazel" />
        </Picker>
      </View>

      <View style={styles.mapWrapper}>
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Selected Location" />
        </MapView>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  pickerContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
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
  contactInfoContainer: {
    backgroundColor: '#fff', 
    borderRadius: 15,       
    padding: 20,          
    margin: 20,             
    shadowColor: '#000',     
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,           
  },
  heading1: {
    fontSize: 24,
    color: '#07416d',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  heading2: {
    fontSize: 18,
    color: '#07416d',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#07416d',
    textAlign: 'center',
    marginBottom: 10,
  },
  mapWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    width: '50%',
    height: '50%',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#07416d',
  },
  map: {
    width: '90%',
    height: '90%',
    borderRadius: 15,
  },
  footerContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#07416d',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default ContactScreen;
