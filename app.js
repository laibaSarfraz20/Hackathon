import{collection, getDocs ,db , analytics ,  getAuth} from "./firebase.js";

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to add a new post
async function addPost(title, content) {
  try {
    await db.collection("posts").add({
      title: title,
      content: content,
      timestamp: new Date()
    });
    alert("Post added successfully!");
    loadPosts(); 
  } catch (error) {
    console.error("Error adding post: ", error);
  }
}


async function loadPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; 

  try {
    const querySnapshot = await db.collection("posts").orderBy("timestamp", "desc").get();
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const postElement = `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <small>${new Date(post.timestamp.toDate()).toLocaleString()}</small>
        </div>
      `;
      postsContainer.innerHTML += postElement;
    });
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
}


document.getElementById("blogForm").addEventListener("submit", (event) => {
  event.preventDefault(); 
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  addPost(title, content);
  event.target.reset();
});

loadPosts();



   




