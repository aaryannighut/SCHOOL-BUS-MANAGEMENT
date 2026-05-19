 // Logout Button Functionality
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Add Booking Button Functionality
const addBookingButton = document.querySelector('.add-booking');
const tableBody = document.querySelector('table tbody');

addBookingButton.addEventListener('click', () => {
    // Prompt the user for booking details
    const pnr = prompt("Enter PNR:");
    const name = prompt("Enter Name:");
    const contact = prompt("Enter Contact Number:");
    const bus = prompt("Enter Bus:");
    const route = prompt("Enter Route (e.g., City A - City B):");
    const seat = prompt("Enter Seat Number:");
    const amount = prompt("Enter Amount (₹):");
    const departure = prompt("Enter Departure Time:");
    const booked = prompt("Enter Booking Date:");

    // Validate that all fields are filled
    if (pnr && name && contact && bus && route && seat && amount && departure && booked) {
        // Create a new row with the user inputs
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${pnr}</td>
            <td>${name}</td>
            <td>${contact}</td>
            <td>${bus}</td>
            <td>${route}</td>
            <td>${seat}</td>
            <td>₹${amount}</td>
            <td>${departure}</td>
            <td>${booked}</td>
            <td class="actions">
                <button class="edit">EDIT</button>
                <button class="delete">DELETE</button>
            </td>
        `;

        // Add the new row to the table body
        tableBody.appendChild(newRow);
        alert("Booking added successfully!");
    } else {
        alert("All fields are required to add a booking!");
    }
});

// Handle Edit and Delete Actions
tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
        // Handle Edit
        alert("Edit Functionality Coming Soon!");
    } else if (e.target.classList.contains('delete')) {
        // Handle Delete
        if (confirm("Are you sure you want to delete this booking?")) {
            e.target.closest('tr').remove();
            alert("Booking deleted successfully!");
        }
    }
});
