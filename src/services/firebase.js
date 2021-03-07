import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyBOMvHoMwbxmZLL9MwhEW86uGbtoHyynAM',
  authDomain: 'questionaireforschool.firebaseapp.com',
  databaseURL:
    'https://questionaireforschool-default-rtdb.europe-west1.firebasedatabase.app',
};

firebase.initializeApp(config);

export const db = firebase.database();
