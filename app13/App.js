import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';
 
const Tab = createBottomTabNavigator();
 
export default function App(){
  return(
    <NavigationContainer >
      <Tab.Navigator >
        <Tab.Screen name='Pessoal' component={Home}     />
        <Tab.Screen name='Formação' component={Sobre} />
        <Tab.Screen name='Experiência' component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
