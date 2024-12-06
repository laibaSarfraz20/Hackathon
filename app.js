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


async function addPost(title, content) {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: content,
        timestamp: new Date(), // Store the post creation date
      });
      console.log("Post added with ID: ", docRef.id);
      alert("Post successfully added!");
    } catch (e) {
      console.error("Error adding post: ", e);
      alert("Failed to add post. Please try again.");
    }
  }



//   login 
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
let signUp = ()=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user); 
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  let sign_up = document.getElementById("sign_up")
  sign_up.addEventListener("click",signUp)
  
  let signIn=()=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.code); 
    });
  }
  let sign_in = document.getElementById("sign_in")
  sign_in.addEventListener("click",signIn)
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      // window.location.href = "./dashboard.html"
    } else {
    console.log("User not found")
    }
  });
  let sendMail=()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("Email verification sent!");
    });
  }
  let verification = document.getElementById("verification")
  verification.addEventListener("click",sendMail)
  

