import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #FFF;
`;

export const AreaVideos =  styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const ContainerVideo = styled.View`
  width: 40%;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`;

export const CapaVideo = styled.Image`
  width: 140px;
  height: 130px;
  margin: 4px 0;
  border-width: 1;
  border-color: #ebebeb;
`;

export const TituloVideo = styled.Text`
  font-weight: bold;
  text-align: center;
  width: 100%;
  font-size: 18px;
  color: #222
`;

export const AreaBotoes = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Botoes = styled.TouchableOpacity`
  width: 40%;
  max-width: 200px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #ccc;
`;

export const BotoesText = styled.Text`
  color: #222;
  font-size: 15px;
  font-weight: bold;
`;

export const BtnVoltar = styled.Text`
  color: #222;
  font-size: 17px;
  font-weight: bold;
  text-decoration: underline;
  align-self: center;
`;