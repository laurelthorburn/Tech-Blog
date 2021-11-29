const comment = document.getElementById("post-comment");

addComment = (event) => {
    event.preventDefault();
    console.log("YOU MADE IT!");
 };

 comment.addEventListener("click", addPost);
