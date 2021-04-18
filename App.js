import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen';
import { SignUp } from './src/screens/SignUp/SignUp';
import { Login } from './src/screens/Login/Login';
import { GettingStarted } from './src/screens/GettingStarted/GettingStarted';
import { Home } from './src/screens/Home/Home';
import { CourseDetails } from './src/screens/CouserDetails/CousersDetails';
import { Music } from './src/screens/Music';
import { Meditate } from './src/screens/Meditate';
import { ChooseTopic } from './src/screens/ChooseTopic';
import { Reminder } from './src/screens/Reminder';
export default function App() {
  return (
    <View style={styles.container}>
    
      <Reminder/>
    </View>
  );
}
// hsaflsd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
