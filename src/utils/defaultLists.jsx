import React from 'react';
import { nanoid } from 'nanoid';

// default questionnaires
export const saveToStorage = () => {
  const title1 = 'Квадараты чисел от 1 до 10';
  const title2 = 'Кубы чисел от 1 до 10';
  const set1 = [
    { question: '1^2', expectedAnswer: '1' },
    { question: '2^2', expectedAnswer: '4' },
    { question: '3^2', expectedAnswer: '9' },
    { question: '4^2', expectedAnswer: '16' },
    { question: '5^2', expectedAnswer: '25' },
    { question: '6^2', expectedAnswer: '36' },
    { question: '7^2', expectedAnswer: '49' },
    { question: '8^2', expectedAnswer: '64' },
    { question: '9^2', expectedAnswer: '81' },
    { question: '10^2', expectedAnswer: '100' },
  ];
  const set2 = [
    { question: '1^3', expectedAnswer: '1' },
    { question: '2^3', expectedAnswer: '8' },
    { question: '3^3', expectedAnswer: '27' },
    { question: '4^3', expectedAnswer: '64' },
    { question: '5^3', expectedAnswer: '125' },
    { question: '6^3', expectedAnswer: '216' },
    { question: '7^3', expectedAnswer: '343' },
    { question: '8^3', expectedAnswer: '512' },
    { question: '9^3', expectedAnswer: '729' },
    { question: '10^3', expectedAnswer: '1000' },
  ];
  const defaultQuestioneir1 = {
    questions: set1,
  };

  const defaultQuestioneir2 = {
    questions: set2,
  };

  return (
    <>
      {localStorage.setItem(title1, JSON.stringify(defaultQuestioneir1))}
      {localStorage.setItem(title2, JSON.stringify(defaultQuestioneir2))}
    </>
  );
};

export const generateId = () => {
  localStorage.setItem('userId', 'user:' + nanoid(7));
  console.log("New UserId generated");
};
