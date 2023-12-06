import styled from "styled-components/native";

import { Dimensions, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");


export const ViewAbsolute = styled(BlurView).attrs({
  style: StyleSheet.absoluteFill,
  blurType: "light",
  blurAmount: 10,
})`
  z-index: 99999;
  position: absolute;
  top: 0;
  padding: 15% 3% 0;
  width: ${width}px;
`;

export const ViewTop = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: #ff69b4;
  padding: 10px;
  border-radius: 8px;
`;

export const TouchableOpacityText = styled.Text`
  color: #fff; /* Cor branca */
  font-size: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  margin-right: 8px;
  border: 1px solid #ff69b4;
  border-radius: 8px;
  padding: 0 10px;
  color: #ff69b4; /* Cor verde */
  background-color: rgba(247, 227, 232, 0.8);
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
