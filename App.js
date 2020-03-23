import React, {Component} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Registro from './screens/registro';
import Inicio from './screens/inicio';
import Principal from './screens/principal';
import Login from './screens/login';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Inicio" component={Inicio}/>
          <Stack.Screen name="Registro" component={Registro}/>
          <Stack.Screen name="Principal" component={Principal}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
};
export default App;
