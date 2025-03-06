// Simple form submission message
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting to the server
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Check if fields are filled
    if (name && email && message) {
      document.getElementById('formMessage').textContent = `Thank you for your message, ${name}!`;
    } else {
      document.getElementById('formMessage').textContent = 'Please fill out all fields.';
    }
  });
  