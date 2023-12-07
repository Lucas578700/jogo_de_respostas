
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import firebase from '@react-native-firebase/database';
import {
  Container,
  Title,
  Score,
  Ranking,
  Button,
  ButtonText,
} from './style';
import { getDatabase, ref, set } from 'firebase/database';
import { useEffect } from 'react';

const Pontuacao = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Obtém o objeto de navegação

  useEffect(() => enviarDadosParaFirebase())
  const { correctAnswers, totalQuestions } = route.params || {}; // Obtendo os valores passados

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  // Função para enviar dados para o Firebase
  const enviarDadosParaFirebase = () => {
    const dados = {
      nome: 'Nome do usuário',
      email: 'email@example.com',
      acertos: 3,
      erros: 7,
    };

    // Enviar dados para o Firebase
    var db = getDatabase();
    set(ref(db,'pontuacoes/'),dados)
      .then(() => {
        console.log('Dados enviados com sucesso para o Firebase!');
      })
      .catch((error) => {
        console.error('Erro ao enviar dados para o Firebase:', error);
      });
  };

  return (
    <Container>
      <Title>RESULT</Title>
      <Score>You scored {correctAnswers}/{totalQuestions}</Score>
      <Title>RANKING</Title>
      <Ranking>1º Theresa Webb</Ranking>
      <Ranking>2º Jenny Wilson</Ranking>
      <Ranking>3º Marvin McKinney</Ranking>
      <Ranking>4º Kristin Watson</Ranking>
      <TouchableOpacity onPress={handleNavigateToHome}>
        <Button>
          <ButtonText>Jogar novamente</ButtonText>
        </Button>
      </TouchableOpacity>
    </Container>
  );
};

export default Pontuacao;
