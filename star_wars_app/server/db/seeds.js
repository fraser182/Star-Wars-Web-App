use star_wars_world;
db.dropDatabase();

db.generalQuiz.insertMany([
  {
    question: "What is the home planet for Princess Leia?",
    answers: {
      a: "Alderaan",
      b: "Tatooine",
      c: "Naboo",
      d: "Yavin"
    },
    correctAnswer: "Alderaan"
  },
  {
    question: "Which is the planet for where Jabba the Hutt lived in his palace?",
    answers: {
      a: "Tatoonie",
      b: "Geonosis",
      c: "Endor",
      d: "Naboo"
    },
    correctAnswer: "Tatoonie"
  },
  {
    question: "Which is the swamp planet where Yoda went into exile after the Great Jedi Purge (Order 66)?",
    answers: {
      a: "Corellia",
      b: "Kashyyyk",
      c: "Hoth",
      d: "Dagobah"
    },
    correctAnswer: "Dagobah"
  }
]);

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

db.characterQuiz.insertMany([
  {
    question: "Which character gets killed by Darth Maul in Episode ?",
    answers: {
      a: "Qui-Gon",
      b: "Obi-Wan Kenobi",
      c: "Anakin Skywalker",
      d: "Samuel Jackson"
    },
    correctAnswer: "Qui-Gon"
  },
  {
    question: "What is the name of the highest and wisest member of the Jedi council?",
    answers: {
      a: "King",
      b: "Master of the Order",
      c: "Grand Master",
      d: "High Member"
    },
    correctAnswer: "Grand Master"
  },
  {
    question: "Which is the most famous statement by c-3PO?",
    answers: {
      a: "Oh my god!",
      b: "This is madness!",
      c: "What the bloody hell do you think you are doing?",
      d: "Out of my way, I still have legs you know!"
    },
    correctAnswer: "This is madness!"
  }
]);
