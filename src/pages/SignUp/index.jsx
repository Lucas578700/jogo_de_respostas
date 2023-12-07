import React, { useState } from "react";
import { Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserSchema } from "../../utils/createUserValidation";
import Splash from "../../../assets/splash2x.png";
import {
  Container,
  Title,
  InputContainer,
  StyledTouchableOpacity,
  TouchableOpacityText,
  Input,
} from "./styles";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase/firebaseConnection";


const SignUp = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth(app);

  const handleSignUp = async () => {
    if (!nome || !email) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        nome,
        email
      );
      const user = userCredential.user;
      alert("Usuario criado: " + user.email);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        alert("Email inválido");
      } 
    }

    setNome("");
    setEmail("");
    navigation.navigate("Home",{
      nome,
      email,
    });

  };

  return (
    <Container>
      <Image source={Splash} style={{ width: 300, height: 200 }} />
      <Title>Cadastre-se</Title>
      <InputContainer>
        <Input
          placeholder="Nome"
          value={nome}
          autoCapitalize="none"
          onChangeText={(text) => setNome(text)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="E-mail"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
      </InputContainer>
      
      <StyledTouchableOpacity onPress={handleSignUp}>
        <TouchableOpacityText>Start</TouchableOpacityText>
      </StyledTouchableOpacity>
    </Container>
  );
};

export default SignUp;
