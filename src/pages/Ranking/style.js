import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #9F7FFF;
    align-items: center;
    justify-content: center;
    padding: 10%;
`;

export const Title = styled.Text`
  color: white;
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Score = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 32px;
`;

export const Ranking = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #FF9051;
  padding: 10px 16px;
  border-radius: 16px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;