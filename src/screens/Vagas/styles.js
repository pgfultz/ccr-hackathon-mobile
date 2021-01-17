import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #FFF;
`;

export const VagasArea = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 20px 0;
  border-bottom-width: 1;
  border-color: #CCC;
`;

export const VagasAreaIcon = styled.View`
  width: 60px;
  align-items: center;
  justify-content: center;
  border-right-width: 1;
  border-color: #CCC;
`;

export const VagasAreaDescricao = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 8px 0;
`;

export const VagasAreaDescricaoText = styled.Text`
  font-weight: bold;
  color: #222;
  font-size: 16px;
  margin-left: 8px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const AreaBotoes = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 12px;
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