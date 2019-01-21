const GeneralQuizDetailView = function(){

}

GeneralQuizDetailView.prototype.createGeneralQuizDetail = function(singleQuestion){
  const generalQuizDiv = document.createElement('div');

  const header = document.createElement('h3');
  header.textContent = singleQuestion.question;
  console.log('blah', singleQuestion.question);
  generalQuizDiv.appendChild(header);

  const form = document.createElement('FORM');

  this.createInput('radio', 'Answer 1', singleQuestion.answers[0], form);
  this.createInput('radio', 'Answer 2', singleQuestion.answers[1], form);
  this.createInput('radio', 'Answer 3', singleQuestion.answers[2], form);
  this.createInput('radio', 'Answer 4', singleQuestion.answers[3], form);

  const submitButton = document.createElement("input");
  submitButton.setAttribute('type',"submit");
  submitButton.setAttribute('value',"Update");
  form.appendChild(submitButton);

  generalQuizDiv.appendChild(form);

  return generalQuizDiv;
}

GeneralQuizDetailView.prototype.createInput = function (type, name, value, form) {
  const input = document.createElement("input"); //input element, text
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  form.appendChild(input);
}

module.exports = GeneralQuizDetailView;
