const post = document.getElementById("new-post");

addPost = (event) => {
   event.preventDefault();
console.log("hiIIIIIIIIIIIIIIIIIiiiiiiiiiiiiiiii, welcome to the dashboard. you clicked the button.");
};

post.addEventListener("click", addPost);