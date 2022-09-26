import React, { Component } from 'react';

import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './Style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      mensagem: ''
    };

    this.Aleatorio = this.Aleatorio.bind(this);
  }

  Aleatorio() {

    let naleatorio = Math.floor(Math.random() * 10)
    this.setState({ mensagem: naleatorio })

  }


  render() {
    let img = 'https://marceloguernieri.com.br/wp-content/uploads/2018/01/charada.gif';

    return (
      // Colocando o titulo 
      <View style={styles.container}>
        <Text style={{ color: 'blue', fontSize: 25, margin: 15 }}>

          ADIVINHE O NÚMERO ! </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 150, height: 150 }}
        />

        <Text style={{ color: 'black', fontSize: 25, margin: 15 }}>

          Pense em um número de 0 a 10  </Text>
          
        <Text style={{ color: 'Black', fontSize: 20, margin: 20 }}>
          {' '}
          {this.state.mensagem}
        </Text>

        <Button

          color="green"
          title="Verificar"
          onPress={this.Aleatorio}
        />
      </View>
    );
  }
}

export default App;