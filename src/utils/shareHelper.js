import { nanoid } from 'nanoid';
import firebase from './../firebase';

let userId = '';
let poolTitle = '';
let currentIndex = 0;
let listId = 'default';
let targetQuestionnaire = '';

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
  resetStateBeforeFetch();
  console.log('-Start downloading by code ' + code);
  await getUserAndTitleByCode(code);
  await getQuestionnaireFromDb();
  console.log('-Finish a pool downloading--');

  return targetQuestionnaire;
};

//---------export questionnaire flow----------------
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
    console.log('1 Exprt: Questionnairy saved: ', listId);
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
        console.log('2 Exprt: Current conter:', counter);
        resolve(counter);
      } catch (err) {
        console.error('Exprt.Error in getSharedCounter(): ', err);
        reject(err);
      }
    })();
  });
}

function increaseAndSaveSharedCounter() {
  return new Promise((resolve, reject) => {
    const updatedIndex = currentIndex + 1;
    console.log('3 Exprt: Updated counter: ', updatedIndex);
    counterRepo
      .doc(counterId)
      .set({ index: updatedIndex })
      .catch((err) => {
        console.error('Exprt. Error in increaseSharedCounter(): ', err);
        reject(err);
      })
      .then(resolve);
    console.log('4 Exprt: Updated counter saved OK');
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
    console.log('5 Exprt: Shared code saved OK');
  });
}

//------import flow--------
function getUserAndTitleByCode(sharedCode) {
  return new Promise((resolve) => {
    (async () => {
      try {
        const response = await fetch(sharedCollectionUrl + '/' + sharedCode);
        if (response.status === 404) throw new Error('Shared code is not found in db.');
        const json = await response.json();
        userId = json.fields.userId.stringValue;
        poolTitle = json.fields.listId.stringValue;
        console.log(`1 Imprt. UserId: ${userId}. Questionneir id: ${poolTitle}`);
        resolve();
      } catch (err) {
        console.log('Error getting userId and listId by code ' + sharedCode);
        resolve();
      }
    })();
  });
}

function getQuestionnaireFromDb() {
  if (userId === '' || poolTitle === '') {
    console.log('Empty user or poolTitle');
    return;
  }
  return new Promise((resolve, reject) => {
    (async () => {
      const questionnaireUrl = process.env.REACT_APP_BASIC_PATH_TO_DB + userId + '/' + poolTitle;
      try {
        const response = await fetch(questionnaireUrl);
        if (response.status === 404) throw Error('The questionnaire is not found.');
        const json = await response.json();
        targetQuestionnaire = json.fields.doc.stringValue;
        console.log('2 Imprt. Questionnaire downloaded OK');
        resolve();
      } catch (err) {
        console.error('Error downloading questionnaire.', err);
        resolve();
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
  const qArray = JSON.parse(pool).questions;
  const strToSave = JSON.stringify({ listTitle: title, questions: qArray });
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

function resetStateBeforeFetch() {
  userId = '';
  poolTitle = '';
  targetQuestionnaire = '';
}
