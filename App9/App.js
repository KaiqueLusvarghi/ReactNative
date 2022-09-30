
import React, { Component } from 'react';
import { Text,View, StyleSheet, ScrollView,Image } from 'react-native';


 
class App extends Component{
  render(){
  let Img1 = 'https://pbs.twimg.com/media/D5u_tCvXkAEMd6y.jpg';
  let Img5 = 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/490524147003593.62c03396ed9af.jpg';
  let Img3 = 'https://www.promoview.com.br/uploads/2019/03/images/25.03.2019/KFC_estreia_seu_primeiro_comercial_no_Brasil_1.jpg';
  let Img4 = 'https://www.meioemensagem.com.br/wp-content/uploads/2020/01/CC_GV_banner_site_768x1365_VERT_01_A_v30.jpg';
  let Img2 = 'https://www.ofuxico.com.br/wp-content/uploads/2021/11/mequi-friday-mc-donalds.jpg';

    return(
      <View> <Text style ={{ fontSize: 50, margin: 10, color: '#008000',fontFamily: "cursive"}}> ANÚNCIOS</Text> 
     
      
        <ScrollView 
        horizontal={true}
         style = {styles.estilo}>

    <View style={styles.container}>
                
      <View > 
           <Image style={styles.image} 
           source={{ uri: Img1 }}
          /> </View > <Text style={styles.mercadoria}
          > Pão com gergelim, maionese, alface, tomate, cebola, ketchup, picles, queijo derretido e um suculento hambúrguer de pura carne bovina. Todos esses ingredientes são cuidadosamente armazenados e preparados, para você se deliciar com um sanduíche fresquinho e de alta qualidade. Por apenas R$30,90 acesse já <a  href= "https://www.burgerking.com.br/"> BugerKing</a></Text>
      </View>   

      <View style={styles.container}>
       <View >
           <Image style={styles.image} 
           source={{ uri: Img2 }}
          /> </View > <Text style={styles.mercadoria}
          > Dois hambúrgueres (100% carne bovina), alface americana, queijo cheddar, maionese Big Mac, cebola, picles e pão com gergelim.Por Apenas. R$25.99 Acesse já <a href= "https://www.mcdonalds.com.br/cardapio/mc-oferta"> Mc Donald's </a></Text>
          </View> 

          <View style={styles.container}>
       <View >
           <Image style={styles.image} 
           source={{ uri: Img3 }}
          /> </View ><Text style={styles.mercadoria}
           > Frango e Bacon, alma gêmea, um sonho lindo de viver. Experimente o menu de Bacon do KFC! A crocância do KFC + o sabor do bacon = alma gêmea. Chegou o novo menu Frango e Bacon! Suculento por dentro. Crocante por fora. Por apenas R$49.99. Acesse já <a href= "https://kfcbrasil.com.br/"> KFC </a></Text>
          </View> 

           <View style={styles.container}>
       <View >
           <Image style={styles.image} 
           source={{ uri: Img4 }}
          /> </View ><Text style={styles.mercadoria}
          > Coca-Cola sabor original contém água gaseificada, açúcar, extrato de noz de cola, cafeína, corante caramelo IV, acidulante ácido fosfórico e aroma natural. Cada 200ml contém 85kcal e 10mg de sódio. Por apenas R$5.00. Acesse já <a href= "https://www.coca-cola.com/"> Coca-Cola</a></Text>
          </View> 

           <View style={styles.container}>
       <View >
           <Image style={styles.image} 
           source={{ uri: Img5 }}
          /> </View ><Text style={styles.mercadoria}
          > Mas seu sabor agradou tanto que o xarope começou a ser consumido simplesmente por prazer. Cinco anos mais tarde, a fórmula transformou-se em bebida e começou a ser comercializada. Hoje, a Pepsi é um refrigerante de cola com aroma natural, muito apreciado pelo sabor suave e pela refrescância. Por Apenas R$4.99. Acesse já
           <a href= "https://promo.pepsi.com.br/home/"> Pepsi</a></Text>
          </View> 
          

        </ScrollView>
      
      </View>
    )
  }
}

 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    width: 300,
    height:530,
    margin: 1,
    borderWidth: 2
  },
  image:{
    
     width: 295,
    height: 290
  },
  mercadoria:{
  fontFamily: "cursive",
  fontSize: 15,
  margin: 10,

  }
 
})

export default App;