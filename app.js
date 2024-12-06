import{collection, getDocs ,db , analytics ,  getAuth} from "./firebase.js";

function togglePostForm() {
    var postForm = document.getElementById('postForm');
    if (postForm.style.display === 'none' || postForm.style.display === '') {
        postForm.style.display = 'block';
    } else {
        postForm.style.display = 'none';
    }
}

function createPost() {
    var title = document.getElementById('postTitle').value;
    var content = document.getElementById('postContent').value;

    if (title && content) {
        var article = document.createElement('div');
        article.className = 'article';

        var date = new Date();
        var dateString = date.toLocaleString('default', { month: 'short' }) + ' ' + date.getDate();

        article.innerHTML = `
            <span class="date">${dateString}</span>
            <h4>${title}</h4>
            <p>${content}</p>
            <div class="meta">
                <span class="tag">New</span>
                <span class="author">By You</span>
                <span class="read-time"><i class="far fa-clock"></i> Just now</span>
            </div>
        `;

        var mainContent = document.querySelector('.main-content');
        mainContent.insertBefore(article, mainContent.firstChild);

        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';
        togglePostForm();
    } else {
        alert('Please fill in both the title and content.');
    }
}

// authentications

  function login(event) {
    event.preventDefault(); // Prevent form submission refresh
    const username = document.getElementById("loginUsername").value; // Firebase auth doesn't use username directly
    const password = document.getElementById("loginPassword").value;

    // Firebase login
    auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Logged in successfully
        alert("Login successful!");
        console.log("User:", userCredential.user);
        // Redirect to your dashboard or another page
        window.location.href = "your-dashboard-page.html";
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        alert("Error: " + error.message);
      });
  }
// signup
  function signup(event) {
    event.preventDefault(); // Prevent form submission refresh
    const username = document.getElementById("signupUsername").value; // Optional for your UI
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Firebase signup
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





