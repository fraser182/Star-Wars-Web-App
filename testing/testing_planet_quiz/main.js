function check(){

const question1 = document.quiz.question1.value;
const question2 = document.quiz.question2.value;
const question3 = document.quiz.question3.value;
const question4 = document.quiz.question4.value;
var correct = 0;

  if (question2 == "Alderaan") {
    correct++;
  }
  if (question3 == "Tatooine") {
    correct++;
  }
  if (question4 == "Dagobah") {
    correct++;
  }

const messages = ["you are the Chosen One", "you are no Jedi", "you will never turn to the dark side", "the force is not with you"];
const pictures = ["images/top_score.gif", "images/the_force_is_not_with_you.gif", "images/pretty_good.gif", "images/nae_bad.gif"];

var range;

  if (correct < 1) {
    range = 3;
  }
  if (correct > 0 && correct < 2) {
    range = 1;
  }

  if (correct > 1 && correct < 3) {
    range = 2;
  }

  if (correct > 2) {
    range = 0;
  }



document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = quiz.question1.value + ", " + messages[range];

document.getElementById("number_correct").innerHTML = "You got " + correct + "  out of 3 correct";
document.getElementById("picture").src = pictures[range];
}
