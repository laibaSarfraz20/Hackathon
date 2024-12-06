import{ getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification}from "./firebase.js";
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
  auth.signInWithEmailAndPassword(username, password)
  .then((userCredential) => {
 
    alert("Login successful!");
    console.log("User:", userCredential.user);
    window.location.href = "../index.html";
  })
  .catch((error) => {
    console.error("Login failed:", error.message);
    alert("Error: " + error.message);
  });
}

function signup() {
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Simple validation
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Account created successfully
    alert("Account created successfully!");
    console.log("User:", userCredential.user);
    // Optionally save username in Firestore or update profile
    userCredential.user.updateProfile({ displayName: username });
  })
  .catch((error) => {
    console.error("Signup failed:", error.message);
    alert("Error: " + error.message);
  });
}






