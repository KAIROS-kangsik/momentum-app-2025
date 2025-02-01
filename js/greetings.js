const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 이벤트의 기본 행동이 무엇이든 간에 그 행동이 발생되지 않도록 막음

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  greeting.classList.toggle(HIDDEN_CLASSNAME);

  greeting.innerText = `Hello ${username.toUpperCase()}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername.toUpperCase()}!`;
}
