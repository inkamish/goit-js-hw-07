const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return console.log("All form fields must be filled in");
  }

  const userInfo = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(userInfo);
  event.currentTarget.reset();
}
