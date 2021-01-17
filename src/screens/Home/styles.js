import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #FFF;
`;

export const BigButton = styled.TouchableOpacity`
  width: 80%;
  max-width: 360px;
  height: 140px;
  background-color: #005d98;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 20px 0;
`;

export const BigButtonText = styled.Text`
  font-weight: bold;
  color: #FFF;
  font-size: 24px;
`;