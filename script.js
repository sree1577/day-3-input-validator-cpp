const form = document.getElementById("validatorForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const ageError = document.getElementById("ageError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMsg = document.getElementById("successMsg");
const summaryMsg = document.getElementById("summaryMsg");
const strengthMsg = document.getElementById("strengthMsg");
const togglePassword = document.getElementById("togglePassword");

function validateUsername() {
  const regex = /^[a-zA-Z0-9_]{4,15}$/;
  if (!regex.test(username.value)) {
    showError(username, usernameError, "Username 4–15 chars (letters, numbers, _)");
    return false;
  }
  showSuccess(username, usernameError);
  return true;
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    showError(email, emailError, "Invalid email format");
    return false;
  }
  showSuccess(email, emailError);
  return true;
}

function validatePhone() {
  const regex = /^[6-9]\d{9}$/;
  if (!regex.test(phone.value)) {
    showError(phone, phoneError, "Enter valid 10-digit phone number");
    return false;
  }
  showSuccess(phone, phoneError);
  return true;
}

function validateAge() {
  const value = Number(age.value);
  if (isNaN(value) || value < 18 || value > 60) {
    showError(age, ageError, "Age must be 18–60");
    return false;
  }
  showSuccess(age, ageError);
  return true;
}

function validatePassword() {
  let strength = 0;
  const val = password.value;

  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/\d/.test(val)) strength++;
  if (/[@$!%*?&]/.test(val)) strength++;

  strengthMsg.textContent =
    strength <= 1 ? "Weak Password" :
    strength <= 3 ? "Medium Password" :
    "Strong Password";

  strengthMsg.className =
    "strength " + (strength <= 1 ? "weak" : strength <= 3 ? "medium" : "strong");

  if (strength < 3) {
    showError(password, passwordError, "Password too weak");
    return false;
  }

  showSuccess(password, passwordError);
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, confirmPasswordError, "Passwords do not match");
    return false;
  }
  showSuccess(confirmPassword, confirmPasswordError);
  return true;
}

function showError(input, errorElement, message) {
  input.classList.add("invalid");
  input.classList.remove("valid");
  errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
  input.classList.add("valid");
  input.classList.remove("invalid");
  errorElement.textContent = "";
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
age.addEventListener("input", validateAge);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

togglePassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

form.addEventListener("submit", e => {
  e.preventDefault();
  successMsg.textContent = "";
  summaryMsg.textContent = "";

  const errors = [];
  if (!validateUsername()) errors.push("Username");
  if (!validateEmail()) errors.push("Email");
  if (!validatePhone()) errors.push("Phone");
  if (!validateAge()) errors.push("Age");
  if (!validatePassword()) errors.push("Password");
  if (!validateConfirmPassword()) errors.push("Confirm Password");

  if (errors.length === 0) {
    successMsg.textContent = "🕷️ Validation Successful!";
    form.reset();
    strengthMsg.textContent = "";
    document.querySelectorAll("input").forEach(i => i.classList.remove("valid"));
  } else {
    summaryMsg.textContent = `Fix errors in: ${errors.join(", ")}`;
  }
});
