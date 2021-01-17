import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import {
  Logo,
  InputLogin,
  BtnLogin,
  TextBtnLogin,
  BtnCadastrar
} from './styles';

import bgLogin from '../../assets/img/bg-login.jpg';
import logo from '../../assets/img/logo.png';

export default function Login({ navigation }){
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return(
    <ImageBackground 
      source={bgLogin} 
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Logo
        resizeMode="contain"
        source={logo}
      />

      <InputLogin
        placeholder="E-mail"
        value={login}
        onChangeText={(e) => setLogin(e)}
      />
      <InputLogin
        placeholder="Senha"    
        secureTextEntry={true}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <BtnLogin
        onPress={ () => navigation.navigate('Home') }
      >
        <TextBtnLogin>ENTRAR</TextBtnLogin>
      </BtnLogin>
      <TouchableOpacity
        onPress={ () => navigation.navigate('Cadastro') }
      >
        <BtnCadastrar>Criar conta</BtnCadastrar>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});