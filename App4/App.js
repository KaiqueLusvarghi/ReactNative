import React, { Component } from 'react';

import { View, Text, TextInput, Button, Image } from 'react-native';
import { style } from './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultado: 0,
      num1: 0,
      num2: 0,
      mensagem: ''
    };

    this.Calcular = this.Calcular.bind(this);
  }

  Calcular() {
   let calcular: this.state.num1 / this.state.num2,
    
  }


  render() {
    let img = 'https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-gas-station-icon-cartoon-style-png-image_1896261.jpg';

    return (

      <View style={styles.container}>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>

          Alcool ou Gasolina ? </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 150, height: 150 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço do gasolina?"
          onChangeText={(n1) => this.setState({ num1: n1 })}
        />


        <TextInput
          style={styles.input}
          placeholder="Preço do alcool?"
          onChangeText={(n2) => this.setState({ num2: n2 })}
        />



        <Button
          color="green"
          title="Verificar"
          onPress={this.Calcular}
        />

        <Text style container>
          {' '}
          Resultado: {this.state.calcular}
        </Text>
      </View>
    );
  }
}

export default App;