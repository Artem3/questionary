import { nanoid } from 'nanoid';
import firebase from './../firebase';

let userId = '';
let poolTitle = '';
let currentIndex = 0;
let listId = 'default';

const counterId = 'counterId';
const sharedCollection = 'shared';
const counterCollection = 'counter';
const user = getOrCreateUserId();

const userRepo = firebase.firestore().collection(user);
const sharedRepo = firebase.firestore().collection(sharedCollection);
const counterRepo = firebase.firestore().collection(counterCollection);

const counterUrl = process.env.REACT_APP_BASIC_PATH_TO_DB + counterCollection;
const sharedCollectionUrl = process.env.REACT_APP_BASIC_PATH_TO_DB + sharedCollection;

// Export. Share your questionnaire with anybody
export const doSharing = async (title, pool) => {
  if (!validateData(title, pool)) {
    return;
  }
  console.log('-Start sharing--');
  await saveQuestionnairyToDb(title, pool);
  await getSharedCounter();
  await increaseAndSaveSharedCounter();
  await saveSharedCode();
  console.log('-Finish sharing--');

  return currentIndex;
};

// Import. Get shared questionnaire into your local storage
export const downloadSharedPool = async (code) => {
  console.log('code is ', code);
  console.log('-Start downloading--');
  await getUserAndTitleByCode(code);
  console.log('-Finish a pool downloading--');
};

// ------------------------------------------------
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
    console.log('1 Imprt: Questionnairy saved: ', listId);
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
        console.log('2 Imprt: Current conter:', counter);
        resolve(counter);
      } catch (err) {
        console.error('Imprt.Error in getSharedCounter(): ', err);
        reject(err);
      }
    })();
  });
}

function increaseAndSaveSharedCounter() {
  return new Promise((resolve, reject) => {
    const updatedIndex = currentIndex + 1;
    console.log('3 Imprt: Updated counter: ', updatedIndex);
    counterRepo
      .doc(counterId)
      .set({ index: updatedIndex })
      .catch((err) => {
        console.error('Imprt. Error in increaseSharedCounter(): ', err);
        reject(err);
      })
      .then(resolve);
    console.log('4 Imprt: Updated counter saved OK');
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
    console.log('5 Imprt: Shared code saved OK');
  });
}

function getUserAndTitleByCode(sharedCode) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await fetch(sharedCollectionUrl + '/' + sharedCode);
        const json = await response.json();
        userId = json.fields.userId.stringValue;
        poolTitle = json.fields.listId.stringValue;
        resolve(console.log(`1 Exprt. UserId: ${userId}. Questionneir title: ${poolTitle}`));
      } catch (err) {
        console.error('Error getting userId and listId by code: ', sharedCode, err);
        reject(err);
      }
    })();
  });
}
//----------private methods--------------
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
