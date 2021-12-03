const newFormHandler = async (event) => {
   event.preventDefault();
 
   const post_title = document.querySelector('#post-name').value;
   const post_content = document.querySelector('#post-desc').value;
 
   if (post_title && post_content) {
     const response = await fetch(`/api/posts`, {
       method: 'POST',
       body: JSON.stringify({ post_title, post_content }),
       headers: {
         'Content-Type': 'application/json',
       },
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to create post');
     }
   }
 };
 
 const delButtonHandler = async (event) => {
   if (event.target.hasAttribute('data-id')) {
     const id = event.target.getAttribute('data-id');
 
     const response = await fetch(`/api/posts/${id}`, {
       method: 'DELETE',
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to delete post');
     }
   }
 };

const updateButtonHandler = async (event) => {
  // event.preventDefault();
  if (event.target.hasAttribute('data-update')) {
    const id = event.target.getAttribute('data-update');
  
  const response = await fetch(`/api/posts/${id}`);

  const postResponse = await response.json(); //converts to readable data

console.log("YOOOOOOOOOO==============",
postResponse.post_content);

document.querySelector('#message-text').value = postResponse.post_content;
document.querySelector('#recipient-name').value = postResponse.post_title;

  return postResponse;
  };
};
 
 document
   .querySelector('.new-post-form')
   .addEventListener('submit', newFormHandler);
 
 document
   .querySelector('.post-list')
   .addEventListener('click', delButtonHandler);

 document
   .querySelector('.post-list')
   .addEventListener('click', updateButtonHandler);
 