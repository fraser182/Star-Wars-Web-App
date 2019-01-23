const PubSub = require('../helpers/pub_sub.js');
const SideQuizDetailView = require('./side_quiz_detail_view.js');
const SideQuizButtonView = require('./side_quiz_button_view.js');

const SideQuizListView = function(container){
  this.container = container;
};

SideQuizListView.prototype.bindEvents = function(){
  PubSub.subscribe('SideQuizButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    console.log('Side Quiz List Working:', evt.detail);
    this.render(evt.detail)
  });
}

SideQuizListView.prototype.render = function(sideQuiz){
  const form = document.createElement('FORM');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('submitting', evt.target);
    this.handleSubmit(evt.target);
  });

  const sideQuizDiv = document.createElement('div');

  const allQuizDivs = sideQuiz.map((singleQuestion) => {
    const sideQuizDetail = new SideQuizDetailView();
    const quizDiv = sideQuizDetail.createQuizQuestion(singleQuestion, form);
    return quizDiv;
  });

  allQuizDivs.forEach((quizDiv) => {
    form.appendChild(quizDiv);
  })

  const submitButton = document.createElement("input");
  form.appendChild(submitButton);
  sideQuizDiv.appendChild(form);
  submitButton.id = "submit-button-quiz"
  submitButton.setAttribute('type',"submit");
  submitButton.setAttribute('value',"SEND");
  this.container.appendChild(sideQuizDiv);

  // 1. Add an event listener to the form that publishes the submitted data to the model
  // 2. The model figures out the results and publishes them to a resultview
  // 3. Resultview displays the results from the model
};

SideQuizListView.prototype.handleSubmit = function(form){
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



module.exports = SideQuizListView;
