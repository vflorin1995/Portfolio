const form = document.getElementById('contactForm');
const email = document.getElementById('user_email');
const message = document.querySelector('.redtext');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = email.value;
  const emailLowerCase = emailInput.toLowerCase();
  if (emailInput === emailLowerCase) {
    form.submit();
  } else {
    message.classList.remove('displayNone');
  }
});

email.addEventListener('focus', () => {
  message.classList.add('displayNone');
});
