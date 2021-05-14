import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View , Button,LogBox } from 'react-native';
import  SplashScreen  from './src/screens/SplashScreen/SplashScreen';
import  SignUp  from './src/screens/SignUp/SignUp';
import  Login from './src/screens/Login/Login';
import  GettingStarted  from './src/screens/GettingStarted/GettingStarted';
import {index} from './src/screens/index';
import Setting from './src/screens/Setting/Setting';
import Playlists from './src/screens/Playlists/Playlists';
import EditProfile from './src/screens/EditProfile/EditProfile';
LogBox.ignoreLogs(['Remote debugger']);

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         activeTintColor: '#e91e63',
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Meditate"
//         component={Meditate}
//         options={{
//           tabBarLabel: 'Meditate',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Music"
//         component={Music}
//         options={{
//           tabBarLabel: 'Music',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  const ref = React.useRef(null);

  return (
    <View style={{ flex: 1 }}>
        <NavigationContainer ref={ref}>
              <Stack.Navigator initialRouteName="SplashScreen" headerMode='none'>
                 
                  <Stack.Screen name="SplashScreen" component={SplashScreen} />
                  <Stack.Screen name="SignUp" component={SignUp} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="GettingStarted" component={GettingStarted} />
                  <Stack.Screen name="index" component={index} />
                  <Stack.Screen name="Setting" component={Setting} />
                  <Stack.Screen name="Playlists" component={Playlists} />
                  <Stack.Screen name="EditProfile" component={EditProfile} />

            </Stack.Navigator>
              
        {/* <MyTabs /> */}
        </NavigationContainer>
        
   </View>
  );
}