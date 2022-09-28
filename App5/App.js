import React, { Component } from 'react';

import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './Style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result:0,
      num1: 0,
      num2: 0,
      mensagem: ''
    };

    this.Calcular = this.Calcular.bind(this);
  }

  Calcular() {

    let calcular = this.state.num2 / (this.state.num1 * this.state.num1)
    if (calcular <= 18.5) {
      this.setState({ mensagem: 'Abaixo do peso' })
    } else if (calcular < 24.9) {
      this.setState({ mensagem: 'Peso normal' })
    }
    else if (calcular < 34.9) {
      this.setState({ mensagem: 'Obesidade Grau 1' })
    }
    else if (calcular < 39.9) {
      this.setState({ mensagem: 'Obesidade Grau 2' })
    }
    else { this.setState({ mensagem: 'Obesidade Grau 3 ou Mórbida' }) }


  }


  render() {
    let img = 'https://www.fetalmed.net/wp-content/uploads/2020/09/imagem-destacada-imc.jpg';

    return (
      // Colocando o titulo 
      <View style={styles.container}>
        <Text style={{ color: 'blue', fontSize: 25, margin: 15 }}>

          CALCULO IMC </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 150, height: 150 }}
        />

        {/*Inserindo o valor da altura */}
        <TextInput
          style={styles.input}
          placeholder="Qual a altura?"
          onChangeText={(n1) => this.setState({ num1: n1 })}
        />

        {/*Inserindo o valor do peso */}
        <TextInput
          style={styles.input}
          placeholder="Qual o peso?"
          onChangeText={(n2) => this.setState({ num2: n2 })}
        />


        {/* Chamando a função calcular */}
        <Button
         style={styles.Button}
          color="green"
          title="Verificar"
          onPress={this.Calcular}
        />

        <Text style container>
          {' '}
          Resultado: {this.state.mensagem}
        </Text>
      </View>
    );
  }
}

export default App;
