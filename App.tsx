import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import CalculateScreen from './screens/CalculateScreen';
import ContactScreen from './screens/ContactScreen';
import SewingDetailsScreen from './screens/SewingDetailsScreen';
import FirstAidDetailsScreen from './screens/FirstAidDetailsScreen';
import ChildMindingDetailsScreen from './screens/ChildMindingDetailsScreen';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GardenMaintenanceDetailsScreen from './screens/GardenMaintenanceDetailsScreen';
import LandscapingDetailsScreen from './screens/LandscapingDetailsScreen';
import CookingDetailsScreen from './screens/CookingDetailsScreen';
import LifeSkillsDetailsScreen from './screens/LifeSkillsDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { CoursesStackParamList } from './screens/RootStackParams';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<CoursesStackParamList>();

function CoursesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#07416d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="CoursesList"
        component={CoursesScreen}
        options={{
          headerTitle: "Course List",
          headerShown: true, // Hide header for the courses list
        }}
      />
      <Stack.Screen 
        name="SewingDetailsScreen" 
        component={SewingDetailsScreen}
        options={{
          headerTitle: "Sewing Course",
          headerShown: true, // Show header for this screen
        }}
      />
      <Stack.Screen 
        name="FirstAidDetailsScreen" 
        component={FirstAidDetailsScreen}
        options={{
          headerTitle: "First Aid Course",
          headerShown: true, // Ensure header is shown
        }}
      />
      <Stack.Screen 
        name="ChildMindingDetailsScreen" 
        component={ChildMindingDetailsScreen}
        options={{
          headerTitle: "Child Minding Course",
          headerShown: true, // Ensure header is shown
        }}
      />
      <Stack.Screen 
        name="GardenMaintenanceDetailsScreen" 
        component={GardenMaintenanceDetailsScreen}
        options={{
          headerTitle: "Garden Maintenance Course",
          headerShown: true, // Ensure header is shown
        }}
      />
      <Stack.Screen 
        name="LandscapingDetailsScreen" 
        component={LandscapingDetailsScreen}
        options={{
          headerTitle: "Landscaping Course",
          headerShown: true, // Ensure header is shown
        }}
      />
      <Stack.Screen 
        name="CookingDetailsScreen" 
        component={CookingDetailsScreen}
        options={{
          headerTitle: "Cooking Course",
          headerShown: true, // Ensure header is shown
        }}
      />
      <Stack.Screen 
        name="LifeSkillsDetailsScreen" 
        component={LifeSkillsDetailsScreen}
        options={{
          headerTitle: "Life Skills Course",
          headerShown: true, // Ensure header is shown
        }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Courses':
                  iconName = focused ? 'school' : 'school-outline';
                  break;
                case 'Calculate':
                  iconName = focused ? 'calculator' : 'calculator-outline';
                  break;
                case 'Contact Us':
                  iconName = focused ? 'call' : 'call-outline';
                  break;
                default:
                  iconName = 'home-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#07416d',
            tabBarInactiveTintColor: '#5d8956',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Courses" component={CoursesStack} />
          <Tab.Screen name="Calculate" component={CalculateScreen} />
          <Tab.Screen name="Contact Us" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopWidth: 0,
    elevation: 0,
  },
});

export default App;
