import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <React.Fragment>
      {/* <StatusBar backgroundColor="#005d98" /> */}
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </React.Fragment>
  );
}