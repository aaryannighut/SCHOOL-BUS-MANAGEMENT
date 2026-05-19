// Show suggestion if input is "z"
document.getElementById('busNumber').addEventListener('input', function() {
    const suggestion = document.getElementById('suggestion');
    if (this.value.toLowerCase() === 'z') {
        suggestion.style.display = 'block';
    } else {
        suggestion.style.display = 'none';
    }
});

// Handle form submission
document.getElementById('routeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
