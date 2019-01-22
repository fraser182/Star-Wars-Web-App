const PubSub = require('../helpers/pub_sub.js');
const GeneralQuizDetailView = require('./general_quiz_detail_view.js');
const GeneralQuizButtonView = require('./general_quiz_button_view.js');


const GeneralQuizFormView = function (form) {
  this.container = container;
  this.form = form;
  this.quiz = null;
};

GeneralQuizFormView.prototype.bindEvents = function () {
  PubSub.subscribe('GeneralQuizButtonView:button-selected', (evt) => {
    this.quiz = evt.detail;
    this.renderForm(this.quiz);
    this.form.addEventListener('submit', (evt) => {
      this.handleSubmit(evt);
    })
  });
};

GeneralQuizFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newQuiz = this.createQuiz(evt.target);
  PubSub.publish('GeneralFormView:form-submitted', newQuiz);
  evt.target.reset();
};

GeneralQuizFormView.prototype.createQuiz = function (form) {
  const newQuiz = new GeneralQuizDetailView(form);
}
  return newQuiz;

};

module.exports = GeneralQuizFormView;
