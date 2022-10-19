function playGame() {
  let userName = window.prompt("Please enter your name:");
  let userScore = 0;

  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let userAnswer = window.prompt(question.text).toUpperCase();
    if (userAnswer === question.correctAnswer) {
      userScore = userScore + 10;
      window.alert("Your score is: " + userScore);
    }
  }

  let userPlayAgainAnswer = window
    .prompt(
      userName +
        ", you finished with a score of: " +
        userScore +
        "!" +
        " Play again? Yes or no."
    )
    .toUpperCase();
  if (userPlayAgainAnswer === "YES") {
    playGame();
  } else {
    window.alert("Thanks for playing! :D");
  }
}

playGame();
