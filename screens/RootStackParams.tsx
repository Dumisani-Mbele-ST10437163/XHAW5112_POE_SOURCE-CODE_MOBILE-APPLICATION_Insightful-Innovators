// RootStackParams.ts
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  CoursesList: undefined;
  CalculateFees: undefined;
  ContactUs: undefined;
  SewingDetailsScreen: undefined;
  FirstAidDetailsScreen: undefined;
  ChildMindingDetailsScreen: undefined;
  GardenMaintenanceDetailsScreen: undefined;
  LandscapingDetailsScreen: undefined;
  LifeSkillsDetailsScreen: undefined;
  CookingDetailsScreen: undefined;


};

// Define stack navigation prop types
export type CoursesStackParamList = {
  CoursesList: undefined;
  SewingDetailsScreen: undefined;
  FirstAidDetailsScreen: undefined;
  ChildMindingDetailsScreen: undefined;
  GardenMaintenanceDetailsScreen: undefined;
  LandscapingDetailsScreen: undefined;
  LifeSkillsDetailsScreen: undefined;
  CookingDetailsScreen: undefined;

};

export type CoursesStackScreenProps<T extends keyof CoursesStackParamList> = 
  StackScreenProps<CoursesStackParamList, T>;

// Define props type for CoursesScreen
export type CoursesScreenProps = CoursesStackScreenProps<'CoursesList'>;
  