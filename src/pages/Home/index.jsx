import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  QuestionCard,
  OptionButton,
  QuestionText,
  OptionText,
  Button,
  ButtonText,
} from "./styles";

import Pontuacao from '../Ranking';

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();

  const { nome, email,} = route.params || {};
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple');
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchQuestions();
  }, []);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleOptionPress = (option) => {
  console.log(currentQuestionIndex)

    const currentQuestion = questions[currentQuestionIndex];

    if (option === currentQuestion.correct_answer) {
      setCorrectAnswers(prevCount => prevCount + 1);
    }


    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };
  console.log('questions', questions)

  if (loading) {
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );
  }
  console.log(currentQuestionIndex)
  if (currentQuestionIndex >= questions.length) {

    return (
      <Container>
        <Title>Congratulations! You've answered all the questions.</Title>
        <Title>You got {correctAnswers} out of {questions.length} correct!</Title>
        <TouchableOpacity >
          <Button onPress={() => navigation.navigate('Pontuacao', { nome, email, correctAnswers, totalQuestions: questions.length })}>
            <ButtonText>Ver Resultado</ButtonText>
          </Button>
        </TouchableOpacity>
      </Container>
    );
  }

  return (
    <>
      {questions !== undefined && questions.length > 0 && (
        <Container>

          <Title>Question {currentQuestionIndex + 1} of {questions.length}</Title>
          <QuestionCard>
            <QuestionText>{questions[currentQuestionIndex].question}</QuestionText>
          </QuestionCard>
          {questions[currentQuestionIndex].incorrect_answers.concat(questions[currentQuestionIndex].correct_answer).sort().map((option, index) => (
            <OptionButton
              key={index}
              onPress={value => handleOptionPress(option)}
            >
              <OptionText>{option}</OptionText>
            </OptionButton>
          ))}

        </Container>
      )}
    </>
  );
};

export default Home;
