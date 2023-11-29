import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7e3e8;
  padding: 15% 3% 0;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ff1493;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: #ff69b4;
  padding: 10px;
  border-radius: 8px;
`;

export const TouchableOpacityText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const Input = styled.TextInput`
  height: 40px;
  border: 1px solid #ff69b4;
  border-radius: 8px;
  padding: 0 10px;
  color: #ff69b4;
  background-color: rgba(247, 227, 232, 0.8);
  width: 100%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #ff69b4;
  padding: 15px;
  border-radius: 8px;
  width: 80%;
`;

export const RegisterButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ErrorText = styled.Text`
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;
