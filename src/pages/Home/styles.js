import styled from "styled-components/native";

import { Dimensions, StyleSheet } from "react-native";


export const QuestionCard = styled.View`
  background-color: white;
  border-radius: 40px;
  padding: 20px;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const QuestionText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  color: #280A82;
  font-weight: bold;
`;

export const OptionButton = styled.TouchableOpacity`
  padding: 6%;
  border-radius: 12px;
  margin: 2%;
  border-width: 2px;
  border-color: #CFC0FF;
  width: 90%;
`;

export const OptionText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: white;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 100px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #9F7FFF;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin: 10px;
  color: #FFF;
  font-weight: bold;
`;

export const TitleSub = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: #FFF;
  font-weight: bold;
`;
