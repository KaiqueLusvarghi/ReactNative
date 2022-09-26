import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Kaique Ortolani Lusvarghi';
    let img = 'https://www.praiagrande.sp.gov.br/arquivos/foto/46508.jpg';
 
    return(
      
      <View>
        <Text>Meu App</Text>
        <Text></Text>
        <Text></Text>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300}}
        />
 
        <Text style={{ fontSize: 30 }}>{nome}</Text>

        <Text></Text>
        
        <Text style={{color: '#00BFFF', fontSize: 50, margin: 15}}>
          Dados Pessoais !
        </Text>
 
        <Text style ={{ fontSize: 25, margin: 1}}> Age: 21y</Text>
        <Text style ={{ fontSize: 25, margin: 1}}> From: Praia Grande - sp</Text>
        <Text style ={{ fontSize: 25, margin: 1}}> I was born: São Bernardo dos Campos.</Text>
        <Text style ={{ fontSize: 25, margin: 1}}> I like play Handboll</Text>
        <Text style={{color: '#00BFFF', fontSize: 50, margin: 15}}>
          Formação !
        </Text>
        <Text style ={{ fontSize: 25, margin: 1}}> I studied in Praia Grande, in school Balneario das Palmeiras</Text>
        <Text style ={{ fontSize: 25, margin: 1}}> I intend to be java developer</Text>
        <Text style ={{ fontSize: 25, margin: 1}}> Skills:  Dev Java</Text>
        <Text style ={{ fontSize: 25, margin: 1}}> Student in college Fatec-Sp i'm in 5° cycle</Text>

        <Text style={{color: '#00BFFF', fontSize: 50, margin: 15}}>
          Experiência !
        </Text>
        <Text style ={{ fontSize: 25, margin: 1}}> i'm improving myself in Java language</Text>

        <Text style={{color: '#00BFFF', fontSize: 50, margin: 15}}>
          Projetos !
        </Text>

        <Text style ={{ fontSize: 25, margin: 1}}> Web application development where we use API's para buscar dados em outros sites</Text>
        <Text style ={{ fontSize: 25, margin: 1}}>  My GitHub  KaiqueLusvarghi</Text>



      </View>
    )
  }
}
 
export default App;
