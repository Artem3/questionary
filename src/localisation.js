import React, { useState } from 'react';
export const dictionary = {
  en: {
    Home: {
      'Welcome to the questionnaire!!': 'Welcome to the questionnaire!!',
    },
  },
  ua: {
    Home: {
      'Welcome to the questionnaire!!': 'Вітаємо у questionnaire!!',
    },
  },
};
export const defaultLanguage = 'en';
export const LocalisationContext = React.createContext(dictionary[defaultLanguage]);
