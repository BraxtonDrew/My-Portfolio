document.addEventListener("DOMContentLoaded", function () {
  const greenButton = document.querySelector(".btn-primary");

  greenButton.addEventListener("click", function () {
    alert("You clicked the green button!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const blueButton = document.querySelector(".btn-rounded");

  blueButton.addEventListener("click", function () {
    alert("You clicked the blue button!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const redButton = document.querySelector(".btn-shadow");

  redButton.addEventListener("click", function () {
    alert("You clicked the red button!");
  });
});