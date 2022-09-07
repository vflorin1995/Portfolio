const form = document.getElementById('contactForm');
const email = document.getElementById('user_email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let emailInput = email.value;
  let emailLowerCase = emailInput.toLowerCase();
  if(emailInput === emailLowerCase){
    console.log('submit');
  } else {
    console.log(emailLowerCase);
  }

});
