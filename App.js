import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';


export default function App() {
  const[fontLoaded]  = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if(!fontLoaded){
    return <AppLoading/>
  }
  
  return (
    
    <NavigationContainer>
       <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
