import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

function CalculateScreen() {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Email, setEmail] = useState('');
  const [Error, setError] = useState(false);
  const [ConfirmationMessage, setConfirmationMessage] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalAmountMessage, setTotalAmountMessage] = useState(''); 

  const courses = {
    'Child-minding': 750,
    'Cooking': 750,
    'Garden-maintenance': 750,
    'Landscaping': 1500,
    'Sewing': 1500,
    'Life-skills': 1500,
    'First-aid': 1500,
  };

  const handleRegister = () => {
    if (!isEmpty(Name) && !isEmpty(Surname) && !isEmpty(Email)) {
      setError(false);
      setConfirmationMessage(`Details Recorded`);
    } else {
      setError(true);
      setConfirmationMessage(''); 
    }
  };

  const handleCheckbox = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateTotal = () => {
    const total = selectedCourses.reduce((acc, course) => acc + courses[course], 0);
    let discount = 0;


    if (selectedCourses.length === 2) {
      discount = 0.05;
    } else if (selectedCourses.length === 3) {
      discount = 0.10; 
    } else if (selectedCourses.length > 3) {
      discount = 0.15;
    }

    const discountedTotal = total - (total * discount);


    if (discount > 0) {
      setTotalAmountMessage(
        `Total Amount: R${discountedTotal.toFixed(2)} (after ${discount * 100}% discount)`
      );
    } else {
      setTotalAmountMessage(`Total Amount: R${discountedTotal.toFixed(2)}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

        <LinearGradient
          // Adjusted Background Linear Gradient
          colors={['#c6ffbd', '#80aedc']}
          style={styles.background}
        />
      <View style={styles.logoContainer}>
        <Image source={require('../img/logos/logo_noBG.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Empowering The Nation</Text>
      </View>

      <Text style={styles.title}>Calculate Fees</Text>

      <Text style={styles.heading2}>Enter Your Name:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        value={Name}
        onChangeText={setName}
      />

      <Text style={styles.heading2}>Enter Your Surname:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Surname"
        value={Surname}
        onChangeText={setSurname}
      />

      <Text style={styles.heading2}>Enter Your Email:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={Email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} color="#FFFFFF" />
      </View>

      {Error && <Text style={styles.red}>Please fill in all fields!</Text>}
      {ConfirmationMessage ? (
        <Text style={styles.confirmation}>{ConfirmationMessage}</Text>
      ) : null}

      <Text style={styles.heading2}>Select Courses:</Text>
      {Object.keys(courses).map((course, index) => (
        <CheckBox
          key={index}
          title={`${course} - R${courses[course]}`}
          checked={selectedCourses.includes(course)}
          onPress={() => handleCheckbox(course)}
        />
      ))}

      <View style={styles.calculateButtonContainer}>
        <Button title="Calculate" onPress={calculateTotal} color="#FFFFFF" />
      </View>

      {totalAmountMessage ? (
        <Text style={styles.totalAmount}>{totalAmountMessage}</Text>
      ) : null}
    </ScrollView>
  );
}

function isEmpty(value) {
  return value == null || value.length === 0;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#b5d3ef',
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#07416d',
  },
  red: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff0000',
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#e7f5ff',
    color: '#234884',
    borderColor: '#10274c',
    borderWidth: 2,
    margin: 10,
    padding: 10,
    width: '75%',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#10274c',
    padding: 10,
    borderRadius: 5,
    width: '75%',
  },
  calculateButtonContainer: {
    marginTop: 20,
    backgroundColor: '#395177',
    padding: 10,
    borderRadius: 5,
    width: '75%',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#10274c',
    marginTop: 20,
    textAlign: 'center',
  },
  confirmation: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 18,
    color: '#07416d',
    padding: 5,
    fontWeight: 'bold',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default CalculateScreen;
