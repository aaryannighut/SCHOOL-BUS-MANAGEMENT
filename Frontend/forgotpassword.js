document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Simulate sending a password reset email
    alert('Password reset link has been sent to ' + email);
});
