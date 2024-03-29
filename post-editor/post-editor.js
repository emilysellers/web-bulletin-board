/* Imports */
import '../auth/user.js';
import { addPost } from '../fetch-utils.js';

/* DOM Elements */
const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');
const postButton = document.getElementById('post-button');

/* State */
let error = null;

/* Events */
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    postButton.disabled = true;

    const formData = new FormData(postForm);

    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        contact: formData.get('contact'),
        category: formData.get('category'),
    };

    const response = await addPost(post);
    error = response.error;
    postButton.disabled = false;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
});

/* Display */

function displayError() {
    if (error) {
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
