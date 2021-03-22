import { nanoid } from 'nanoid';
import firebase from './../firebase';

const counterCollection = 'counter';
const counterId = 'counterId';
const user = localStorage.getItem('userId');
const axios = require('axios').default;
const currentIndex; // atomic
const counterUrl =
  'https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/' + counterCollection;

export const doSharing = (title, pool) => {
  if (!validateData(title, pool)) {
    return;
  }

  const userRootRepo = firebase.firestore().collection(user);
  const listId = 'listId:' + nanoid(10);
  const doc = prepareDataToSave(title, pool);

  //save questioneir to db
  userRootRepo
    .doc(listId)
    .set(doc)
    .catch((err) => {
      console.error(err);
    });
  console.log(listId + ' saved--.');

  getCurrentSharedCounter();
  increaseSharedCounter();
  prepareToSaveSharedCode(user, listId);
};

function getCurrentSharedCounter() {
  axios
    .get(counterUrl)
    .then(function (response) {
      const counter = Number(response.data.documents[0].fields.index.integerValue);
      console.log('1- counter: ' + counter);
      currentIndex = counter;
      console.log('2- current index is ' + currentIndex);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function increaseSharedCounter() {
  const counterRepo = firebase.firestore().collection(counterCollection);
  const updatedIndex = currentIndex + 1;
  console.log('3- updatedIndex: ', updatedIndex);

  const counterObj = { index: updatedIndex };
  console.log('4-counterObj: ');
  console.log(counterObj);
  counterRepo
    .doc(counterId)
    .set(counterObj)
    .catch((err) => {
      console.error(err);
    });
  console.log('5- increase has been done--');
}

function validateData(title, pool) {
  let valid = true;
  if (user == null) {
    console.error('userId is null');
    return false;
  }
  if (title === '' || pool === '') {
    console.error('title or pool is empty');
    return false;
  }
  return valid;
}

function prepareDataToSave(title, pool) {
  const strToSave = JSON.stringify({ listTitle: title, questions: pool });
  const toDb = { doc: strToSave };

  return toDb;
}

function prepareToSaveSharedCode(user, listId) {}
