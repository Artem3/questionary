import React from 'react';
const myEmail = "artem.goncharenko@gmail.com";

export const dictionary = {
  en: {
    Home: {
      'Welcome': 'Welcome to the questionnaire!',
      'Contact me': 'Any questions, ideas or suggestions are welcome at my email :  ' + myEmail
    },
  },
  ua: {
    Home: {
      'Welcome': 'Вітаємо у questionnaire!',
      'Contact me': 'Питання, ідеї або пропозиції надсилайте на адресу : ' + myEmail
    },
  },
};
export const defaultLanguage = 'en';
export const LocalisationContext = React.createContext(dictionary[defaultLanguage]);
