import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title:'ABERTURA DE CONTA',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="Dados informados"
        component={Sobre}
        options={{
          title:'Dados informados',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
