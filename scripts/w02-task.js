/* W02-Task - Profile Home Page */
const fullName = 'Your Name';
const currentYear = 'new Date().getFullyear()';
const ProfilePicture = 'images/personal_photo.jpg';

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profile-image');

/* Step 3 - Element Variables */





/* Step 4 - Adding Content */
// Set nameElement's innerHTML property with fullName variable value
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use textContent property to set the value of yearElement to currentYear variable value
yearElement.textContent = currentYear;

// Use setAttribute method to set the src property of imageElement
imageElement.setAttribute('src', profilePicture);

// Use setAttribute method to set the alt property of imageElement
imageElement.setAttribute('alt', `Profile image of ${fullName}`);






/* Step 5 - Array */






