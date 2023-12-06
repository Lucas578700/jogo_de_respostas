import { SubmitButton, SubmitText } from "./styles";

export const StartButton = ({ onPress, text, activeOpacity }) => {
  return (
    <SubmitButton activeOpacity={activeOpacity || 0.8} onPress={onPress}>
      <SubmitText>{text}</SubmitText>
    </SubmitButton>
  );
};