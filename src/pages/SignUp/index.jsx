import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  InputContainer,
  StyledTouchableOpacity,
  TouchableOpacityText,
  Input,
} from "./styles";
import { createUserWithEmailAndName, getAuth } from "firebase/auth";
import { app } from "../../firebase/firebaseConnection";

const SignUp = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");

  const auth = getAuth(app);

  const handleSignUp = async () => {
    if (!email || !nome || !numero) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndName(
        auth,
        nome,
        email,
        numero
      );
      const user = userCredential.user;
      alert("Usuario criado: " + user.email);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        alert("Email inválido");
      } else {
        alert("Ops, algo deu errado: " + error.message);
      }
    }

    setNome("");
    setEmail("");
    setNumero("");
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Title>Cadastro de Usuário</Title>
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

      <InputContainer>
        control={control}
        render=
        {({ field: { onChange, value } }) => (
          <>
            <Label>Nível de Dificuldade</Label>
            <DificultyPicker
              control={control}
              value={selectedCategory}
              onChange={setSelectedDificulty}
              errors={errors}
              options={categoryOptions}
            />
          </>
        )}
        name="dificulty"
      </InputContainer>

      <StyledTouchableOpacity onPress={handleSignUp}>
        <TouchableOpacityText>Cadastrar</TouchableOpacityText>
      </StyledTouchableOpacity>
    </Container>
  );
};

export default SignUp;
