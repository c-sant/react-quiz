import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

// Função nomeada para o componente
export default function ResultCard({ question, answer, choice, isCorrect }) {
  // Definindo a cor com base no valor de isCorrect
  const backgroundColor = isCorrect ? 'green' : 'red';

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.questionText}>Questão: {question}</Text>
      <Text style={styles.answerText}>Resposta Correta: {answer}</Text>
      <Text style={styles.choiceText}>Sua Resposta: {choice}</Text>
      <Text style={styles.resultText}>
        {isCorrect ? 'Você acertou! :)' : 'Você errou! :('}
      </Text>
    </View>
  );
}

