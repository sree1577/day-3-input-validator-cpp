# 🕷️ Day 3 – Input Validation Utility (Spider-Man Theme)

A responsive frontend web application that validates user inputs such as username, email, phone number, age, password, and confirm password with defensive programming, real-time validation, and Spider-Man–inspired animations.

This project is part of the **30 Days – 30 Projects** challenge (Day 3, Project 3).

---

## 🚀 Live Features

✅ Username validation (length & allowed characters)
✅ Email validation using regex
✅ Phone number validation (10-digit format)
✅ Age validation (numeric, range 18–60)
✅ Strong password validation
✅ Confirm password matching
⚡ Real-time validation while typing
👁️ Show / Hide password toggle
📊 Password strength indicator (Weak / Medium / Strong)
❌ Animated error feedback for invalid inputs
🕷️ Spider-Man–style animations:
      Input shake & glow
      Web-shoot animation
      Screen flash on error
      “Validation Failed” badge
📱 Fully responsive (mobile-first)
🎨 Clean, modern superhero-themed UI
---

## 🧠 Concepts Covered

- Client-side input validation
- Defensive programming
- Regular expressions (Regex)
- DOM manipulation
- Real-time form validation
- Password security rules
- CSS animations & transitions
- Responsive UI design
- User-friendly error feedback

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

> ❌ No frameworks  
> ❌ No backend  
> ❌ No external libraries  

---

## 📂 Project Structure

day-03-input-validator/
│
├── index.html
├── style.css
├── script.js
└── README.md
---

## 📋 Validation Rules

### 👤 Username

- Length: 4–15 characters
- Allowed characters: letters, numbers, underscore (_)

### 📧 Email
- Must not be empty  
- Must follow standard email format  

### 📞 Phone Number
- Must be a valid 10-digit number

### 🎂 Age
- Must be a number  
- Allowed range: **18–60**

### 🔐 Password
- Minimum **8 characters**
- At least **1 uppercase letter**
- At least **1 number**
- At least **1 special character**

### 🔁 Confirm Password
- Must exactly match the password field

---

## 🎮 User Experience

Action	                    Result
Invalid input	        Shake + red glow
Typing input	        Real-time validation feedback
Weak password	        Strength indicator shown
Submit invalid form	  Web animation + screen flash
Validation failure	  Animated error badge
Valid input	          Green glow
All inputs valid	    Success message

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open the project folder
3. Double-click on `index.html`

That’s it — runs directly in the browser 🚀

---

## 📌 Future Enhancements

- Save validated data using localStorage
- Sound effects for error/success
- Dark / Light mode toggle
- Success animation (“Level Completed 🕸️”)
- Convert to React version
