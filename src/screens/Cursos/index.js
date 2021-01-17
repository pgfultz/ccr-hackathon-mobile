import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';

import {
  Container,
  ContainerCurso,
  FotoCurso,
  TituloCurso,
  BtnVoltar
} from './styles';

import imgCurso1 from '../../assets/img/curso-1.jpg';
import imgCurso2 from '../../assets/img/curso-2.jpg';
import imgCurso3 from '../../assets/img/curso-3.jpg';
import imgCurso4 from '../../assets/img/curso-4.jpg';

export default function Cursos({ navigation }){
  return(
    <ScrollView>
      <Container>
        <ContainerCurso>
          <FotoCurso 
            source={imgCurso1}
            resizeMode="contain"
          />
          <View style={{ flex: 1}}>
            <TituloCurso>
              Agente de Aeroporto. Pré requisito: Ensino médio. Duração: 280h
            </TituloCurso>
          </View>
        </ContainerCurso>
        
        <ContainerCurso>
          <FotoCurso 
            source={imgCurso2}
            resizeMode="contain"
          />
          <View style={{ flex: 1}}>
            <TituloCurso>
            Agente de Solo de Aeroporto. Pré- requisito: Ensino médio. Duração: 40h
            </TituloCurso>
          </View>
        </ContainerCurso>

        <ContainerCurso>
          <FotoCurso 
            source={imgCurso3}
            resizeMode="contain"
          />
          <View style={{ flex: 1}}>
            <TituloCurso>
            Gestão de Aeroporto. Pré- requisito: Ensino médio. Duração: 40h
            </TituloCurso>
          </View>
        </ContainerCurso>

        <ContainerCurso>
          <FotoCurso 
            source={imgCurso4}
            resizeMode="contain"
          />
          <View style={{ flex: 1}}>
            <TituloCurso>
            Segurança de Aviação. Pré- requisito: Graduação. Duração: 32h
            </TituloCurso>
          </View>
        </ContainerCurso>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginVertical: 25}}>
          <BtnVoltar>VOLTAR</BtnVoltar>
        </TouchableOpacity>

      </Container>
    </ScrollView>
  );
}