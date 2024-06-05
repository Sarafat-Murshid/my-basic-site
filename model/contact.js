document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageTextarea = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  form.addEventListener("submit", function (event) {
    let valid = true;
  
    if (nameInput.value.trim() === "") {
      valid = false;
      nameError.textContent = "Please enter your name.";
      nameError.style.display = "block";
    } else {
      nameError.textContent = "";
      nameError.style.display = "none";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      valid = false;
      emailError.textContent = "Please enter your email.";
      emailError.style.display = "block";
    } else if (!emailPattern.test(emailInput.value)) {
      valid = false;
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
    }

    if (messageTextarea.value.trim() === "") {
      valid = false;
      messageError.textContent = "Please enter your message.";
      messageError.style.display = "block";
    } else {
      messageError.textContent = "";
      messageError.style.display = "none";
    }

    if (!valid) {
      event.preventDefault(); 
    }
  });
});
