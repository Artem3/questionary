import { nanoid } from 'nanoid';
import firebase from './../firebase';

const counterId = 'counterId';
const counterCollection = 'counter';
const user = localStorage.getItem('userId');
const userRepo = firebase.firestore().collection(user);
const counterRepo = firebase.firestore().collection(counterCollection);
let currentIndex = 0;
const counterUrl =
  'https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/' + counterCollection;

export const doSharing = async (title, pool) => {
  if (!validateData(title, pool)) {
    return;
  }
  console.log('-Start sharing process--');
  await saveQuestionnairyToDb(title, pool);
  await getSharedCounter();
  await increaseSharedCounter();
  prepareToSaveSharedCode(user);
  console.log('-Finish sharing--');
};

function saveQuestionnairyToDb(title, pool) {
  return new Promise((resolve, reject) => {
    const listId = 'listId:' + nanoid(10);
    const doc = prepareDataToSave(title, pool);
    userRepo
      .doc(listId)
      .set(doc)
      .catch((err) => {
        reject(err);
      })
      .then(resolve);
    console.log('0. Questionnairy saved: ', listId);
  });
}

function getSharedCounter() {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await fetch(counterUrl);
        const json = await response.json();
        let counter = Number(json.documents[0].fields.index.integerValue);
        currentIndex = counter;
        console.log('1. Current conter:', counter);
        resolve(counter);
      } catch (err) {
        console.error('Error in getSharedCounter(): ', err);
        reject(err);
      }
    })();
  });
}

function increaseSharedCounter() {
  return new Promise((resolve, reject) => {
    const updatedIndex = currentIndex + 1;
    console.log('3: Updated counter: ', updatedIndex);
    counterRepo
      .doc(counterId)
      .set({ index: updatedIndex })
      .catch((err) => {
        console.error('Error in increaseSharedCounter(): ', err);
        reject(err);
      })
      .then(resolve);
    console.log('4: Updated counter saved OK');
  });
}

function validateData(title, pool) {
  let valid = true;
  if (user == null) {
    console.error('Validation error: userId is null');
    return false;
  }
  if (title === '' || pool === '') {
    console.error('Validation error: title or pool is empty');
    return false;
  }
  return valid;
}

function prepareDataToSave(title, pool) {
  const strToSave = JSON.stringify({ listTitle: title, questions: pool });
  const toDb = { doc: strToSave };

  return toDb;
}

function prepareToSaveSharedCode(user) {
  console.log('--FINISH--');
}
