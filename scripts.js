// scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xkgwopbr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
        form.reset(); // Reset the form
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    }).catch(error => {
      alert('There was an error sending your message. Please try again.');
    });
  });


  