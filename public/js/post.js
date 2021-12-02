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
   if (event.target.hasAttribute('data-update')) {
     const id = event.target.getAttribute('data-update');
 
     const response = await fetch(`/api/posts/${id}`, {
       method: 'PUT',
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to update post');
     }
   }
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
 