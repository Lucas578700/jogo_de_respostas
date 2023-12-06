import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import Splash from "../../../assets/splash2x.png";
import {
  Container,
  Title,
  TitleSub
} from "./styles";


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("SignUp");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <Container>
      <Image
        source={Splash}
        style={{ width: 300, height: 200 }}
      />
      <Title>ENIGMACODE AMF</Title>
      <TitleSub>The Information System Challenge</TitleSub>
    </Container>
  );
};

export default SplashScreen;
