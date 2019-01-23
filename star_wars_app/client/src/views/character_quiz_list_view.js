const PubSub = require('../helpers/pub_sub.js');
const CharacterQuizDetailView = require('./character_quiz_detail_view.js');
const CharacterQuizButtonView = require('./character_quiz_button_view.js');

const CharacterQuizListView = function(container){
  this.container = container;
};

CharacterQuizListView.prototype.bindEvents = function(){
  PubSub.subscribe('CharacterQuizButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    console.log('Character Quiz List Working:', evt.detail);
    this.render(evt.detail)
  });
}

CharacterQuizListView.prototype.render = function(characterQuiz){
  const form = document.createElement('FORM');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('submitting', evt.target);
    this.handleSubmit(evt.target);
  });

  const characterQuizDiv = document.createElement('div');

  const allQuizDivs = characterQuiz.map((singleQuestion) => {
    const characterQuizDetail = new CharacterQuizDetailView();
    const quizDiv = characterQuizDetail.createQuizQuestion(singleQuestion, form);
    return quizDiv;
  });

  allQuizDivs.forEach((quizDiv) => {
    form.appendChild(quizDiv);
  })

  const submitButton = document.createElement("input");
  form.appendChild(submitButton);
  characterQuizDiv.appendChild(form);
  submitButton.id = "submit-button-quiz"
  submitButton.setAttribute('type',"submit");
  submitButton.setAttribute('value',"SEND");
  this.container.appendChild(characterQuizDiv);

  // 1. Add an event listener to the form that publishes the submitted data to the model
  // 2. The model figures out the results and publishes them to a resultview
  // 3. Resultview displays the results from the model
};

CharacterQuizListView.prototype.handleSubmit = function(form){
  console.log('in handle submit', form);
  // evt.target wrong?
  const allRadioButtons = document.querySelectorAll('.radio-buttons');
  console.log('allRadioButtons', allRadioButtons);

  const answerArray = [];
  allRadioButtons.forEach((radioButton) => {
    if (radioButton.checked){
      answerArray.push(radioButton.value);
    }
  })

  const answerObject = {
    answerA: answerArray[0],
    answerB: answerArray[1],
    answerC: answerArray[2]
  }

  console.log('answerObject', answerObject);

  PubSub.publish('AnswerView:answers-submitted', answerObject);
};



module.exports = CharacterQuizListView;
