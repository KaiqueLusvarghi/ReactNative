import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,TouchableOpacity, Image} from 'react-native'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {real: 0, dolar: 5, euro: 6 }
    this.calcular = this.calcular.bind(this)

  }
  calcular(){
    
    let real = parseFloat(this.state.real.replace(',','.'))
    let dolar = parseFloat(this.state.dolar)
    let euro = parseFloat(this.state.euro)
    let conver = real / dolar
    let conver2 = real / euro
    conver = conver.toFixed(2)
    conver2 = conver2.toFixed(2)
    
    
    this.setState({conver})
    this.setState({conver2})  
    
    
    console.log(this.state)
    

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitulo}>Conversor de Moedas</Text>
        <Image 
        source={{uri: 'https://acegif.com/wp-content/uploads/gifs/coin-flip-55.gif'}}  
        style={{width: 150, height:200, marginLeft:100 }}/>
        <Text style={styles.textSub}>BRL para USD/EURO</Text>
        <TextInput style={styles.textInput}
        onChangeText={(real) => {this.setState({real})}}
        keyboardType='numeric'
        placeholder='Digite um valor em Real...'
        />
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButton}>Converter :D</Text>
        </TouchableOpacity>
        <Text style={styles.textResul}>Dólar: U${this.state.conver}</Text>
        <Text style={styles.textResul}>Euro: €{this.state.conver2}</Text>
      </View>
    )
  }
}

//styles


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  textInput:{
    padding: 30,
    backgroundColor: '#e2e2e2',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    fontSize: 20,
    borderRadius: 10
  },
  button:{
    margin: 40,
    padding: 30,
    borderRadius: 15,
    backgroundColor: 'blue'
  },
  textButton:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  textResul:{
    color:'purple',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textTitulo:{
    marginTop:70,
    color:'blue',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textSub:{
    marginTop: 20,
    color:'blue',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})