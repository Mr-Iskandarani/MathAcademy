function checkAnswers() {
  // Question 1
  let q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "15") {
    alert("Question 1: Correct 🎉");
  } else {
    alert("Question 1: Wrong ❌");
  }

  // Question 2
  let q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "5") {
    alert("Question 2: Correct 🎉");
  } else {
    alert("Question 2: Wrong ❌");
  }
}