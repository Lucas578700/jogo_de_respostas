import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import {
  Container,
  Title,
  Score,
  Ranking,
  Button,
  ButtonText,
} from './style';

const Pontuacao = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Obtém o objeto de navegação
  const [rankingData, setRankingData] = useState([]);
  const { nome, email, correctAnswers, totalQuestions } = route.params || {}; // Obtendo os valores passados

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  const enviarDadosParaFirebase = () => {
    const dados = {
      nome: nome,
      email: email,
      acertos: correctAnswers,
      erros: totalQuestions - correctAnswers,
    };

    var db = getDatabase();
    set(ref(db, 'pontuacoes/' + nome), dados)
      .then(() => {
        console.log('Dados enviados com sucesso para o Firebase!');
      })
      .catch((error) => {
        console.error('Erro ao enviar dados para o Firebase:', error);
      });
  };

  useEffect(() => {
    const db = getDatabase();
    const pontuacoesRef = ref(db, 'pontuacoes');
  
    // Evento para escutar mudanças no nó 'pontuacoes'
    onValue(pontuacoesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Converter os dados do snapshot para um array
        const rankingArray = Object.entries(data).map(([key, value]) => ({
          key,
          ...value,
        }));
        // Ordenar o ranking pelo número de acertos em ordem decrescente
        rankingArray.sort((a, b) => b.acertos - a.acertos);
        setRankingData(rankingArray);
      }
    });
  
    // Enviar dados para o Firebase quando o componente for montado
    enviarDadosParaFirebase();
  }, []);

  return (
    <Container>
      <Title>RESULT</Title>
      <Score>You scored {correctAnswers}/{totalQuestions}</Score>
      <Title>RANKING</Title>
      <FlatList
        data={rankingData}
        renderItem={({ item, index }) => (
          <Ranking>
            {`${index + 1}º ${item.nome} - Acertos: ${item.acertos}`}
          </Ranking>
        )}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={<Text>No ranking yet</Text>}
      />
    </Container>
  );
};

export default Pontuacao;
