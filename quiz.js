$.get("https://opentdb.com/api.php?amount=10&type=multiple", displayName)
function displayName(data) {
  var answers = [];
  for (var i = 0; i < data.results.length; i++) {
      //console.log(data.results[i]);
      console.log(data.results[i].question);
      for(var ans in data.results[i].incorrect_answers) {
        answers.push(data.results[i].incorrect_answers[ans]);
      }
      var x = Math.floor(Math.random()*5);
      answers.splice(x, 0, data.results[i].correct_answer);
      console.log(answers);
      answers = [];      
  }
}

-------- object data

[object Object] {
  category: "Entertainment: Video Games",
  correct_answer: "Ceara",
  difficulty: "hard",
  incorrect_answers: ["Scarlet", "Serimon", "Omadd"],
  question: "In Guild Wars 2, what was Scarlet Briar&#039;s original name?",
  type: "multiple"
}