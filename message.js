document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show a thank you pop-up
    alert('Thank you for your message!');

    // Clear the input fields
    this.name.value = '';
    this.email.value = '';
    this.subject.value = '';
    this.message.value = '';
});