const PubSub = require('../helpers/pub_sub.js');
const GeneralQuizDetailView = require('./general_quiz_detail_view.js');
const GeneralQuizButtonView = require('./general_quiz_button_view.js');

const GeneralQuizListView = function(container){
  this.container = container;
};

GeneralQuizListView.prototype.bindEvents = function(){
  PubSub.subscribe('GeneralQuizButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    console.log('General Quiz List Working:', evt.detail);
    this.render(evt.detail)
  });
}

GeneralQuizListView.prototype.render = function(generalQuiz){
  const form = document.createElement('FORM');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('submitting', evt.target);
    this.handleSubmit(evt.target);
  });

  const generalQuizDiv = document.createElement('div');

  const allQuizDivs = generalQuiz.map((singleQuestion) => {
    const generalQuizDetail = new GeneralQuizDetailView();
    const quizDiv = generalQuizDetail.createQuizQuestion(singleQuestion, form);
    return quizDiv;
  });

  allQuizDivs.forEach((quizDiv) => {
    form.appendChild(quizDiv);
  })

  const submitButton = document.createElement("input");
  form.appendChild(submitButton);
  generalQuizDiv.appendChild(form);
  submitButton.setAttribute('type',"submit");
  submitButton.setAttribute('value',"Update");
  this.container.appendChild(generalQuizDiv);

  // 1. Add an event listener to the form that publishes the submitted data to the model
  // 2. The model figures out the results and publishes them to a resultview
  // 3. Resultview displays the results from the model
};

GeneralQuizListView.prototype.handleSubmit = function(form){
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



module.exports = GeneralQuizListView;
