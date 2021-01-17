import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { BtnCadastrar, TextBtnLogin } from '../Login/styles';

import {
  Container,
  LabelInput,
  InputCadastro,
  AreaRadio,
  BtnCadastro,
  TextBtnCadastro,
  BtnVoltar,
  TextVoltar
} from './styles';


export default function Cadastro({ navigation }){
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isEmployee, setIsEmployee] = useState('NÃO');

  return(
    <ScrollView>
      <Container>
        <LabelInput>Nome</LabelInput>
        <InputCadastro
          placeholder="Nome"
        />
        <LabelInput>Endereço</LabelInput>
        <InputCadastro
          placeholder="Endereço"
        />
        <LabelInput>Telefone</LabelInput>
        <InputCadastro
          placeholder="Telefone"
        />
        <LabelInput>Funcionário</LabelInput>
        <View style={{ flexDirection: 'column', alignSelf: 'flex-start' }}>
          <RadioButton.Group 
            onValueChange={newValue => setIsEmployee(newValue)} 
            value={isEmployee}
          >
            <AreaRadio>
              <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#222'}}>
                  SIM
                </Text>
                <RadioButton value="SIM" />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 50}}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#222'}}>
                  NÃO
                </Text>
                <RadioButton value="NÃO" />
              </View>
            </AreaRadio>
          </RadioButton.Group>
        </View>
        {isEmployee == 'SIM' && (
          <React.Fragment>
            <LabelInput>Função</LabelInput>
            <InputCadastro
              placeholder="Função"
            />
            <LabelInput>Vídeo (URL)</LabelInput>
            <InputCadastro
              placeholder="Vídeo (URL)"
            />
          </React.Fragment>
        )}
        <LabelInput>Matrícula</LabelInput>
        <InputCadastro
          placeholder="Matrícula"
        />

        <BtnCadastro>
          <TextBtnCadastro>
            CADASTRAR
          </TextBtnCadastro>
        </BtnCadastro>
        <BtnVoltar
          onPress={() => navigation.goBack()}
        >
          <TextVoltar>VOLTAR</TextVoltar>
        </BtnVoltar>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});