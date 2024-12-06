
// login signup
const toggleButtons = document.querySelectorAll(".toggle-form");
const formContent = document.querySelector(".form-content");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Toggle the active class on both forms
    loginForm.classList.toggle("active");
    signupForm.classList.toggle("active");

    // Adjust the sliding position of the form content
    if (signupForm.classList.contains("active")) {
      formContent.style.transform = "translateX(-50%)"; // Slide to show signup form
    } else {
      formContent.style.transform = "translateX(0%)"; // Slide back to login form
    }
  });
});
// funtion
function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Simple validation
  if (username === 'user' && password === 'password') {
      window.location.href = '../index.html'; // Redirect to your website
  } else {
      alert('Invalid username or password');
  }
}

function signup() {
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Simple validation
  if (username && email && password) {
      alert('Sign up successful! You can now log in.');
      document.getElementById('signupForm').reset();
  } else {
      alert('Please fill in all fields');
  }
}

