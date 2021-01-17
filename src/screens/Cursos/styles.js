import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #FFF;
`;

export const ContainerCurso = styled.TouchableOpacity`
  width: 100%;
  height: 140px;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  padding: 20px 0;
  border-bottom-width: 1;
  border-color: #CCC;
`;

export const FotoCurso = styled.Image`
  width: 110px;
  height: 110px;
  border-width: 1;
  border-color: #ebebeb;
`;

export const TituloCurso = styled.Text`
  font-weight: bold;
  color: #222;
  font-size: 16px;
  margin-left: 8px;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const BtnVoltar = styled.Text`
  color: #222;
  font-size: 17px;
  font-weight: bold;
  text-decoration: underline;
  align-self: center;
`;