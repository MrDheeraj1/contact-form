document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').style.display = 'none';
    
    let valid = true;

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    // Validate Email with regex
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty.';
        valid = false;
    }

    // Show success message if form is valid
    if (valid) {
        document.getElementById('successMessage').textContent = 'Thank you for contacting us!';
        document.getElementById('successMessage').style.display = 'block';
        // Reset form after submission (Optional)
        document.getElementById('contactForm').reset();
    }
});
