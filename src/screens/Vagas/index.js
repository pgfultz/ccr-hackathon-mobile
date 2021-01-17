import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  VagasArea,
  VagasAreaIcon,
  VagasAreaDescricao,
  VagasAreaDescricaoText,
  AreaBotoes,
  Botoes,
  BotoesText,
  BtnVoltar
} from './styles';

export default function Vagas({ navigation }){
  return(
    <Container>
      <VagasArea>
        <VagasAreaIcon>
          <Icon name={'account-search'} size={24} color="#222" />
        </VagasAreaIcon>
        <VagasAreaDescricao>
          <VagasAreaDescricaoText>
          Analista Pleno Financeiro {'\n'}
Pré-requisito: Ensino Superior Completo
          </VagasAreaDescricaoText>
        </VagasAreaDescricao>
      </VagasArea>
      <VagasArea>
        <VagasAreaIcon>
          <Icon name={'account-search'} size={24} color="#222" />
        </VagasAreaIcon>
        <VagasAreaDescricao>
          <VagasAreaDescricaoText>
          Analista Pleno de Safety{'\n'}
Pré-requisito:Ensino Superior Completo
          </VagasAreaDescricaoText>
        </VagasAreaDescricao>
      </VagasArea>
      <VagasArea>
        <VagasAreaIcon>
          <Icon name={'account-search'} size={24} color="#222" />
        </VagasAreaIcon>
        <VagasAreaDescricao>
          <VagasAreaDescricaoText>
          Joverm Aprendiz{'\n'}
Pré-requisito: Ter idade de  14 a 22 anos
          </VagasAreaDescricaoText>
        </VagasAreaDescricao>
      </VagasArea>
      <VagasArea>
        <VagasAreaIcon>
          <Icon name={'account-search'} size={24} color="#222" />
        </VagasAreaIcon>
        <VagasAreaDescricao>
          <VagasAreaDescricaoText>
          Técnico em Eletrônica{'\n'}
Pré-requisito: Curso Técnico em Eletrônica ou Telecomunicações
          </VagasAreaDescricaoText>
        </VagasAreaDescricao>
      </VagasArea>

      <AreaBotoes>
        <Botoes
          onPress={() => navigation.navigate('Cursos')} 
        >
          <BotoesText>Cursos</BotoesText>
        </Botoes>
        <Botoes
          onPress={() => navigation.navigate('Videos')} 
        >
          <BotoesText>Videos</BotoesText>
        </Botoes>
      </AreaBotoes>

      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={{ marginVertical: 25, width: '100%'}}
      >
        <BtnVoltar>VOLTAR</BtnVoltar>
      </TouchableOpacity>
    </Container>
  );
}