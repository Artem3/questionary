import { nanoid } from 'nanoid';
import firebase from './../firebase';

const counterCollection = 'counter';
const counterId = 'counterId';
const user = localStorage.getItem('userId');
const axios = require('axios').default;
let index = '';
const counterUrl =
  'https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/' + counterCollection;

export const doSharing = (title, pool) => {
  if (user == null) {
    console.error('userId is  null');
    return;
  }
  //https://firestore.googleapis.com/v1/projects/<prj_name>/databases/(default)/documents/userId-83/
  const userRootRepo = firebase.firestore().collection(user);
  const listId = 'listId:' + nanoid(10);

  //prepare object to be saved in db
  const objToSave = {
    listTitle: title,
    questions: pool,
  };
  const strToSave = JSON.stringify(objToSave);
  const toDb = { pool: strToSave };

  //save questioneir to db
  userRootRepo
    .doc(listId)
    .set(toDb)
    .catch((err) => {
      console.error(err);
    });
  console.log(title + ' saved--');

  getCurrentSharedCounter();
  increaseCurrentSharedCounter();
  prepareToSaveSharedCode(user, listId);
};

function getCurrentSharedCounter() {
  axios
    .get(counterUrl)
    .then(function (response) {
      const counter = response.data.documents[0].fields.index.integerValue;
      index = counter;
      console.log('current index: ' + counter);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function increaseCurrentSharedCounter() {
  const counterRepo = firebase.firestore().collection(counterCollection);

  const counterObj = { index: 12 };
  //save questioneir to db
  counterRepo
    .doc(counterId)
    .set(counterObj)
    .catch((err) => {
      console.error(err);
    });
  console.log(counterObj.index + 'counter increased ++');
}

function prepareToSaveSharedCode(user, listId) {}
