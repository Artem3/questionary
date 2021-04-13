import { nanoid } from 'nanoid';
import firebase from './../firebase';

let currentIndex = 0;
let listId = 'default';
const counterId = 'counterId';
const sharedCollection = 'shared';
const counterCollection = 'counter';
const user = getOrCreateUserId();
const userRepo = firebase.firestore().collection(user);
const sharedRepo = firebase.firestore().collection(sharedCollection);
const counterRepo = firebase.firestore().collection(counterCollection);

const counterUrl =
  'https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/' + counterCollection;
// const shareCollectionUrl =
//   'https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/' + sharedCollection;

export const doSharing = async (title, pool) => {
  if (!validateData(title, pool)) {
    return;
  }
  console.log('-Start sharing--');
  await saveQuestionnairyToDb(title, pool);
  await getSharedCounter();
  await increaseSharedCounter();
  await saveSharedCode();
  console.log('-Finish sharing--');

  return currentIndex;
};

function saveQuestionnairyToDb(title, pool) {
  return new Promise((resolve, reject) => {
    listId = 'listId:' + nanoid(10);
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

function saveSharedCode() {
  return new Promise((resolve, reject) => {
    sharedRepo
      .doc(currentIndex.toString())
      .set({ userId: user, listId: listId })
      .catch((err) => {
        reject(err);
      })
      .then(resolve);
    console.log('5. Shared code saved OK');
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

function getOrCreateUserId() {
  if (localStorage.getItem('userId') == null) {
    const userId = 'user:' + nanoid(7);
    localStorage.setItem('userId', userId);
    return userId;
  } else {
    return localStorage.getItem('userId');
  }
}
