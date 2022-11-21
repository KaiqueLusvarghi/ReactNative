import React, { useState } from 'react';
import { View, Text, Button, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Home() {
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [limite, setLimite] = useState();
  const [nacionalidade, setNacionalidade] = useState();

  function irSobre() {
    navigation.navigate('Dados informados', {
      nome: name,
      idade: idade,
      sexos: sexo,
      escola: escolaridade,
      limite: limite,
      brasileiro: nacionalidade,
    });
  }

  return (
    <View>
      <TextInput
        placeholder="Digite seu nome?"
        onChangeText={(valor) => setName(valor)}
      />

      <TextInput
        placeholder="Digite sua idade? "
        onChangeText={(valor) => setIdade(valor)}
      />
      <Text>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValor, itemIndex) => setSexo(itemValor)}>
        <Picker.Item label="" valor="" />
        <Picker.Item label="Masculino" valor="Masculino" />
        <Picker.Item label="Feminino" valor="Feminino" />
      </Picker>

      <Text> Escolaridade: </Text>
      <Picker
        selectedValue={escolaridade}
        onValueChange={(itemValor, itemIndex) => setEscolaridade(itemValor)}>
        <Picker.Item label="" value="" />
        <Picker.Item label="Cursando" value="Cursando" />
        <Picker.Item label="Completo" value="Completo" />
        <Picker.Item label="Incompleto" value="Incompleto" />
      </Picker>
      <Text>
        <Slider
          onValueChange={(valor) => setLimite(valor)}
          size="sm"
          style={{ width: 300, height: 40 }}
          minimumValue={100}
          maximumValue={1000}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />{' '}
      </Text>

      <Text>{(limite)} </Text>
      <Text>Brasileiro? </Text>

      <Switch
        value={nacionalidade}
        onValueChange={(valor) => setNacionalidade(valor)}
      />
      <Text>{nacionalidade ? 'Sim' : 'Não'}</Text>

      <Button title="Criar conta" onPress={irSobre} />
    </View>
  );
}
