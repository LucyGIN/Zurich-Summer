//i need to set an array for my questions and answers
const levelSun = {
  question: 'What level of sun do you like?',
  answer: ['sunbathing sun', 'shady spots please'],
};

const crowd = {
  question: 'What type of crowd do you prefer?',
  answer: ["let's people watch", 'less people, the better'],
};
const activity = {
  question: 'What activity are you looking to do?',
  answer: [
    'swimming!',
    'relaxing in the park',
    'an apero, to eat, or coffee',
    'an event!',
  ],
};
const location1 = {
  question: 'What do you prefer for location?',
  answer: ['I want to be near the city', 'A bit out of the city'],
};

const questionArray = [levelSun, crowd, activity, location1];
// let currentQuestionIndex = 0

const questionSunContainer = document.querySelector('#questionSunContainer');
const startQuestionsBtn = document.querySelector('#startQuestionsBtn');

startQuestionsBtn.addEventListener('click', () => {
  //hide the button
  startQuestionsBtn.classList.add('hidden');

  //create a question box
  createQuestions(questionArray[0], 0);
});

function createQuestions(look, index) {
  const questionBox = document.createElement('div');
  //lucia added for style?
  questionBox.className = 'simpleForm-container';

  const buttonNext = document.createElement('button');
  buttonNext.innerHTML = 'next';
  buttonNext.addEventListener('click', () => {
    questionBox.classList.add('hidden');
    createQuestions(questionArray[index + 1], index + 1);
  });

  const question = document.createElement('h3');

  question.innerHTML = look.question;
  questionBox.appendChild(question);
  //create two answer

  for (let i = 0; i < look.answer.length; i++) {
    const answerp = document.createElement('label');
    //lucia add style
    answerp.className = 'simpleForm';
    //set up variable for input
    const inputp = document.createElement('input');
    //append the input to the label
    answerp.appendChild(inputp);

    answerp.innerHTML = look.answer[i];
    //add answers to question box
    questionBox.appendChild(answerp);
  }

  questionBox.appendChild(buttonNext);
  //add question and answers
  questionSunContainer.appendChild(questionBox);
}

const answerList = [
    'bridge',
    'swimming',
    ...
]



const answer1 = document.querySelector('.question1 input:checked').innerText //sunny
const answer2 = document.querySelector('.question2 input:checked').innerText //crowded
const answer3 = document.querySelector('.question3 input:checked').innerText //far


const placeIndexs = tree[answer1][answer2][answer3] //[1,7,3,9,12]

const results = placeIndexs.map(function(index) {
  return answerList[index];
});

createElemet('div')
div.appendChild('h1')
h1.innerText = answer.name

{
    name: 'badi enge',
    adress: 'zyx stree',
    bestTimeToGo: '2pm'
}

//answerList[1], answerList[7], answerList[3], answerList[9], answerList[12]

const tree = {
  sunny: {
    crowded: {
      near: [2, 4, 6, 9],
      far: [],
    },
    empty: {
      near: [],
      far: [],
    },
  },
  cloudy: {
    crowded: {
      near: [],
      far: [],
    },
    empty: {
      near: [],
      far: [1, 7, 3, 9, 12],
    },
  },
};
