use star_wars_world;
db.dropDatabase();

db.sideQuiz.insertMany([
  {
    question: "If someone is charging you what would you do?",
    answers: {
      a: "End them",
      b: "Attack back with force",
      c: "Run away",
      d: "Calmingly defend yourself"
    },
    evilAnswer: "End them",
    evilAnswer2: "Attack back with force"
  },
  {
    question: "If you were denied to go on a mission, what would you do?",
    answers: {
      a: "Kill the Jedi Temple",
      b: "Avenge Yourself",
      c: "Give Up",
      d: "Train Harder"
    },
    evilAnswer: "Kill the Jedi Temple",
    evilAnswer2: "Avenge Yourself"
  },
  {
    question: "Which character would you be?",
    answers: {
      a: "Darth Vader",
      b: "Anakin Skywalker",
      c: "Yoda",
      d: "Luke Skywalker"
    },
    evilAnswer: "Darth Vader",
    evilAnswer2: "Anakin Skywalker"
  }
]);
