export const shuffle = (list) => {
  const model = makeValidModel(list);
  return model.sort(() => 0.5 - Math.random());
};

function makeValidModel(list) {
  if (list == null) {
    return [
      {
        question: '',
        expectedAnswer: '',
        givenAnswer: '',
        isCorrect: false,
      },
    ];
  }

  list.forEach((elem) => {
    elem.givenAnswer = '';
    elem.isCorrect = false;
  });
  return list;
}
