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
const location = {
  question: 'What do you prefer for location?',
  answer: ['I want to be near the city', 'A bit out of the city'],
};
const questionSunContainer = document.querySelector('#questionSunContainer');
const startQuestionsBtn = document.querySelector('#startQuestionsBtn');

startQuestionsBtn.addEventListener('click', () => {
  alert('form!');
});
