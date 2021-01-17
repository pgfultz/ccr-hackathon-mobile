import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #FFF;
`;

export const LabelInput = styled.Text`
  font-size: 18px;
  color: #222;
  font-weight: bold;
  align-self: flex-start;
`;

export const InputCadastro = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  background-color: #FFF;
  border-width: 1;
  border-color: #888;
  border-radius: 30px;
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const AreaRadio = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 20px;
  align-self: baseline;
`;

export const BtnCadastro = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 10px;
  background-color: #005d98;
  border-radius: 50px;
  margin-top: 34px;
  align-items: center;
  justify-content: center;
`;

export const TextBtnCadastro = styled.Text`
  font-weight: bold;
  color: #FFF;
  font-size: 18px;
`;

export const BtnVoltar = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 10px;
  background-color: #FFF;
  border-radius: 50px;
  margin: 18px 0;
  align-items: center;
  justify-content: center;
  border-width: 3;
  border-color: #005d98;
`;

export const TextVoltar = styled.Text`
  font-weight: bold;
  color: #005d98;
  font-size: 18px;
`;
