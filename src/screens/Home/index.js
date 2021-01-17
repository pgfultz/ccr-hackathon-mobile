import React from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  BigButton,
  BigButtonText
} from './styles';

export default function Home({ navigation }){
  return(
    <Container>
      <BigButton onPress={ () => navigation.navigate('Cursos') }>
        <BigButtonText>Cursos</BigButtonText>
      </BigButton>
      <BigButton onPress={ () => navigation.navigate('Vagas') }>
        <BigButtonText>Vagas</BigButtonText>
      </BigButton>
      <BigButton onPress={ () => navigation.navigate('Videos') }>
        <BigButtonText>Vídeos</BigButtonText>
      </BigButton>
    </Container>
  );
}