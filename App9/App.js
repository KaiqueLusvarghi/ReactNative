import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, vaga:'Desenvolvedor Backend',salario: '6000,00', descricao:'Precisa ter conhecimento em Java', contato: 'Davi@gmail.com'},
        {id: 2, vaga:'Engenheiro de Dados',salario: '13000,00', descricao:'Conhecer SQL', contato: 'simone@gmail.com'},
        {id: 3, vaga:'Analista de Sistemas',salario: '5000,00', descricao:'Saber Gestão de Projetos', contato: 'Renata@gmail.com'},
        {id: 4, vaga:'Desenvolvedor Frontend',salario: '10000,00', descricao:'Conhecer React-Native', contato: 'joseffe@gmail.com'},
        {id: 5, vaga:'Analista de Hardware',salario: '8000,00', descricao:' Saber Sistemas Operacionais', contato: 'Vagnner@gmail.com'},
       
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={{color: '#FF0000', fontSize: 50, margin: 15}}> VAGAS </Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  areaPessoa:{
    backgroundColor: '#000080',
    height: 200,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#fff',
    fontSize: 20,
  },
 
})
 
export default App;
 
class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>  {this.props.data.vaga} </Text>
        <Text style={styles.textoPessoa}> Salario: {this.props.data.salario} </Text>
        <Text style={styles.textoPessoa}> Descricao: {this.props.data.descricao} </Text>
        <Text style={styles.textoPessoa}> Contato: {this.props.data.contato} </Text>
      </View>
    );
  }
}
