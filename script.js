// Custom form validation logic
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Basic validation rules
  if (username.length < 3) {
    message.textContent = "❌ Username must be at least 3 characters.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "❌ Please enter a valid email.";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    return;
  }

  // If all checks pass
  message.textContent = `✅ Welcome, ${username}! You're signed up.`;
});

// Interactive Feature #1: Surprise button
document.getElementById("surpriseBtn").addEventListener("click", function() {
  alert("🎉 You’re officially part of the Hero Network!");
});

// Interactive Feature #2: Input highlight on focus
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.backgroundColor = "#e0ffff";
  });
  input.addEventListener("blur", () => {
    input.style.backgroundColor = "white";
  });
});

