import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Videos from '../screens/Videos';
import Cursos from '../screens/Cursos';
import Vagas from '../screens/Vagas';

const Stack = createStackNavigator();

export default function Navigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Cursos" component={Cursos} />
      <Stack.Screen name="Vagas" component={Vagas} />
    </Stack.Navigator>
  );
}