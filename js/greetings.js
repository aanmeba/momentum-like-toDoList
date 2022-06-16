const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
  // console.dir(loginInput);
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const toCapitalise = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

const paintGreetings = (username) => {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${toCapitalise(username)}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
