// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission
  console.log('Contact Form Submitted');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Provide feedback to the user
  alert(`Thank you, ${name}! Your message has been received.`);
});
