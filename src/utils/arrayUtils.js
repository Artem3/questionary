export const shuffle = (list) => {
  const model = makeValidModel(list);
  return model.sort(() => 0.5 - Math.random());
};

function makeValidModel(list) {
  list.forEach((elem) => {
    elem.givenAnswer = '';
    elem.isCorrect = false;
  });
  return list;
}
