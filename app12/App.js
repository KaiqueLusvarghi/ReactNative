import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';

let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqgcRUC0LKY13RS-2kvFPO7ocE58LMWdcJHQ4heFRvTZ-wITt02aOTAZH7bbnMgDkCuM&usqp=CAU';


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem vindo </Text>
      <Button
        title="Abrir Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      
    </View>
  );
}

function Pessoal() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <Text style ={{ fontSize: 20, margin: 1}}>
        Nascido em São Bernado do Campo, dia 04/01/2001, mas moro na Praia Grande-SP desde 2009.
      </Text>
    </View>
  );
}

function Formacao() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
     <Text style ={{ fontSize: 20, margin: 1}}>
       Estudei na esola Franco Montoro, depois fui para a escola estadual Palmeiras, e hoje estou fazendo faculdade na Fatec-Pg
      </Text>
    </View>
  );
}

function Experiencia() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
        <Text style ={{ fontSize: 20, margin: 1}}></Text>
        Tenho Experiencia com a lingaguem java, e estou fazendo um projeto de um jgo de xadrez
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
     <Image
          source={{ uri: img }}
          style={{  width: 200, height: 200, borderRadius: 200 / 2}}
        />
        <view > Kaique Ortolani Lusvarghi</view>
      <DrawerItemList {...props} />      
     
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    

    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Bem vindo" component={Feed} />
      <Drawer.Screen name="Pessoal" component={Pessoal} />
      <Drawer.Screen name="Formação" component={Formacao} />
      <Drawer.Screen name="Experiência" component={Experiencia} />
    </Drawer.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
    
      <MyDrawer />
    </NavigationContainer>
  );
}
