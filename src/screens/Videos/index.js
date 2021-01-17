import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  AreaVideos,
  ContainerVideo,
  CapaVideo,
  TituloVideo,
  AreaBotoes,
  Botoes,
  BotoesText,
  BtnVoltar
} from './styles';

import imgVideo1 from '../../assets/img/video-1.jpg';
import imgVideo2 from '../../assets/img/video-2.jpg';
import imgVideo3 from '../../assets/img/video-3.jpg';
import imgVideo4 from '../../assets/img/video-4.jpg';

export default function Videos({ navigation }){
  return(
    <ScrollView>
      <Container>
        <AreaVideos>
          <ContainerVideo>
            <Stars
              default={1}
              count={5}
              starSize={50}
              fullStar={<Icon name={'star'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
              emptyStar={<Icon name={'star-outline'} size={24} color="yellow" style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
              halfStar={<Icon name={'star-half'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
            />
            <CapaVideo 
              source={imgVideo1}
              resizeMode="contain"
            />
            <TituloVideo>Minha primeira entrevista de emprego</TituloVideo>
          </ContainerVideo>
          
          <ContainerVideo>
            <Stars
              default={4}
              count={5}
              starSize={50}
              fullStar={<Icon name={'star'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
              emptyStar={<Icon name={'star-outline'} size={24} color="yellow" style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
              halfStar={<Icon name={'star-half'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
            />
            <CapaVideo 
              source={imgVideo2}
              resizeMode="contain"
            />
            <TituloVideo>Minha primeira entrevista de emprego</TituloVideo>
          </ContainerVideo>
          <ContainerVideo>
            <Stars
              default={5}
              count={5}
              starSize={50}
              fullStar={<Icon name={'star'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
              emptyStar={<Icon name={'star-outline'} size={24} color="yellow" style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
              halfStar={<Icon name={'star-half'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
            />
            <CapaVideo 
              source={imgVideo3}
              resizeMode="contain"
            />
            <TituloVideo>Minha primeira entrevista de emprego</TituloVideo>
          </ContainerVideo>
          <ContainerVideo>
            <Stars
              default={3}
              count={5}
              starSize={50}
              fullStar={<Icon name={'star'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
              emptyStar={<Icon name={'star-outline'} size={24} color="yellow" style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
              halfStar={<Icon name={'star-half'} size={24} color="yellow" style={[styles.myStarStyle]}/>}
            />
            <CapaVideo 
              source={imgVideo4}
              resizeMode="contain"
            />
            <TituloVideo>Minha primeira entrevista de emprego</TituloVideo>
          </ContainerVideo>

          <AreaBotoes>
            <Botoes
              onPress={() => navigation.navigate('Cursos')} 
            >
              <BotoesText>Cursos</BotoesText>
            </Botoes>
            <Botoes
              onPress={() => navigation.navigate('Vagas')} 
            >
              <BotoesText>Vagas</BotoesText>
            </Botoes>
          </AreaBotoes>

          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={{ marginVertical: 25, width: '100%'}}
          >
            <BtnVoltar>VOLTAR</BtnVoltar>
          </TouchableOpacity>
          
        </AreaVideos>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  myStarStyle: {
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
});