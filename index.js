let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputEmail = document.querySelector("#email");
  if (inputEmail === null) {
    throw new Error("Email Input not found!");
  }

  const errorMsg = document.querySelector(".error-msg");
  if (errorMsg === null) {
    throw new Error("Error Msg Element not found!");
  }

  if (inputEmail.value == "") {
    errorMsg.textContent = "Valid email required";
    inputEmail.style.background = "hsla(4, 100%, 67%,0.2)";
    inputEmail.style.borderColor = "hsla(4, 100%, 67%)";

    return;
  }

  inputEmail.style.background = "none";
  inputEmail.style.borderColor = "hsl(231, 7%, 60%)";
  errorMsg.textContent = "";

  let successCard = document.querySelector(".success-card-component");
  successCard.style.display = "grid";

  let signup = document.querySelector(".subs-card-component");
  signup.style.display = "none";

  inputEmail.value = "";
});

let button = document.querySelector("button");
button.addEventListener("click", function (e) {
  let successCard = document.querySelector(".success-card-component");
  successCard.style.display = "none";
  let signup = document.querySelector(".subs-card-component");
  signup.style.display = "grid";
});
