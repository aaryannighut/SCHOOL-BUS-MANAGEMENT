// Add Customer Button Functionality
const addCustomerBtn = document.querySelector('.add-customer-btn');
const tableBody = document.querySelector('table tbody');

addCustomerBtn.addEventListener('click', () => {
    // Prompt user for customer details
    const id = prompt("Enter Customer ID:");
    const name = prompt("Enter Customer Name:");
    const contact = prompt("Enter Contact Number:");

    if (id && name && contact) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${contact}</td>
            <td>
                <button class="edit-btn">EDIT</button>
                <button class="delete-btn">DELETE</button>
            </td>
        `;
        tableBody.appendChild(newRow);
        alert("Customer added successfully!");
    } else {
        alert("All fields are required.");
    }
});

// Edit and Delete Actions
tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const row = e.target.closest('tr');
        const id = row.children[0].textContent;
        const name = row.children[1].textContent;
        const contact = row.children[2].textContent;

        const newId = prompt("Edit Customer ID:", id);
        const newName = prompt("Edit Customer Name:", name);
        const newContact = prompt("Edit Contact Number:", contact);

        if (newId && newName && newContact) {
            row.children[0].textContent = newId;
            row.children[1].textContent = newName;
            row.children[2].textContent = newContact;
        }
    } else if (e.target.classList.contains('delete-btn')) {
        if (confirm("Are you sure you want to delete this customer?")) {
            e.target.closest('tr').remove();
        }
    }
});
