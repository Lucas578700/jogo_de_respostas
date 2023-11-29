import styled from "styled-components/native";
import { Dimensions, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  background-color: #f7e3e8; /* Cor de fundo rosa claro */
  padding: 20px;
  border-radius: 15px;
  align-items: center;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 15px;
  color: #ff1493; /* Cor do texto rosa escuro */
`;

export const EditInput = styled.TextInput`
  height: 50px;
  width: 100%;
  border: 1px solid #ff69b4; /* Cor da borda rosa médio */
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  color: #ff69b4; /* Cor do texto rosa médio */
  background-color: rgba(247, 227, 232, 0.8);
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #2ecc71; /* Cor rosa médio */
  padding: 12px;
  border-radius: 8px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const CloseButton = styled(SaveButton)`
  background-color: #e74c3c;
`;

export const CloseButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

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


export const ViewButtons = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
`