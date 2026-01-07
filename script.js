const form = document.getElementById("validatorForm");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    showError(email, emailError, "Email is required 🕷️");
    return false;
  }
  if (!regex.test(email.value)) {
    showError(email, emailError, "Invalid email format!");
    return false;
  }
  showSuccess(email, emailError);
  return true;
}

function validateAge() {
  const value = Number(age.value);
  if (age.value.trim() === "") {
    showError(age, ageError, "Age is required");
    return false;
  }
  if (isNaN(value) || value < 18 || value > 60) {
    showError(age, ageError, "Age must be 18–60");
    return false;
  }
  showSuccess(age, ageError);
  return true;
}

function validatePassword() {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!regex.test(password.value)) {
    showError(password, passwordError, "Password too weak for a hero!");
    return false;
  }
  showSuccess(password, passwordError);
  return true;
}

function showError(input, errorElement, message) {
  input.classList.remove("valid");
  input.classList.add("invalid");
  input.style.animation = "none";
  input.offsetHeight;
  input.style.animation = null;
  errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
  input.classList.remove("invalid");
  input.classList.add("valid");
  errorElement.textContent = "";
}

function triggerSpiderManErrorEffects() {
  const card = document.querySelector(".card");

  const web = document.createElement("div");
  web.className = "web-line";
  card.appendChild(web);

  const flash = document.createElement("div");
  flash.className = "screen-flash";
  document.body.appendChild(flash);

  const badge = document.createElement("div");
  badge.className = "fail-badge";
  badge.textContent = "❌ Validation Failed";
  card.appendChild(badge);

  card.classList.add("impact");

  setTimeout(() => {
    web.remove();
    flash.remove();
    badge.remove();
    card.classList.remove("impact");
  }, 700);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  successMsg.textContent = "";

  const valid =
    validateEmail() &
    validateAge() &
    validatePassword();

  if (valid) {
    successMsg.textContent = "🕷️ Validation Successful!";
    form.reset();
    document.querySelectorAll("input").forEach(i => i.classList.remove("valid"));
  } else {
    triggerSpiderManErrorEffects();
  }
});
