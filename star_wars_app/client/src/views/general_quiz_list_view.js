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
  GeneralQuizListView.prototype.bindEvents = function(){
    this.form.addEventListener('submit', (evt) => {
      this.handleSubmit(evt);
    });
  }

  GeneralQuizListView.prototype.handleSubmit = function(evt){
    evt.preventDefault();
    // evt.target wrong?
    const newAnswer = this.createAnswer(evt.target);
    PubSub.publish('AnswerView:answers-submitted', newAnswer);
    // evt.target wrong?
    evt.target.reset();
  };

  GeneralQuizListView.prototype.createAnswer = function(form){
    const newAnswer = {
      a: form.a.value,
      b: form.b.value,
      c: form.c.value,
      d: form.d.value
    };
    return newAnswer;
    console.log('new answer:', newAnswer);
  };
};


module.exports = GeneralQuizListView;
