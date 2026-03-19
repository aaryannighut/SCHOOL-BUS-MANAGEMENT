document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        console.log('Password mismatch detected');
        document.getElementById('responseMessage').innerText = 'Passwords do not match.';
        document.getElementById('responseMessage').style.color = 'red';
        return;
    }
    document.getElementById('responseMessage').style.color = 'red !important';

    

    // Simulate a successful registration
   alert('Registration successful for ' + username + '!');
});
