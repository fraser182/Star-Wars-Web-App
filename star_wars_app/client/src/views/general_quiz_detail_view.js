const GeneralQuizDetailView = function(){

}

GeneralQuizDetailView.prototype.createQuizQuestion = function(singleQuestion, form){
  const questionDiv = document.createElement('div');

  const header = document.createElement('h3');
  header.textContent = singleQuestion.question;
  console.log('Question Coming Through:', singleQuestion.question);
  questionDiv.appendChild(header);

  this.createInput('radio', 'Answer 1', singleQuestion.answers[0], questionDiv);
  this.createInput('radio', 'Answer 2', singleQuestion.answers[1], questionDiv);
  this.createInput('radio', 'Answer 3', singleQuestion.answers[2], questionDiv);
  this.createInput('radio', 'Answer 4', singleQuestion.answers[3], questionDiv);

  return questionDiv;
}

GeneralQuizDetailView.prototype.createInput = function (type, name, value, div) {
  const input = document.createElement("input");
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  div.appendChild(input);
}

module.exports = GeneralQuizDetailView;
