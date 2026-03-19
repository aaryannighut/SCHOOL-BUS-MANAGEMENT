// Sample Data
const buses = [
    { id: 1, number: 'NBS4455' },
    { id: 2, number: 'SSX6633' },
    { id: 3, number: 'LLL7699' },
    { id: 4, number: 'MMM9969' },
    { id: 5, number: 'TTH8888' }
];

// Load Buses into the Table
function loadBuses() {
    const tableBody = document.getElementById('bus-table');
    tableBody.innerHTML = ''; // Clear existing rows

    buses.forEach((bus, index) => {
        const row = document.createElement('tr');

        // Serial Number Column
        const serialCell = document.createElement('td');
        serialCell.textContent = index + 1;
        row.appendChild(serialCell);

        // Bus Number Column
        const busNumberCell = document.createElement('td');
        busNumberCell.textContent = bus.number;
        row.appendChild(busNumberCell);

        //Actions Column
        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.classList.add('edit-btn');
        editButton.onclick = () => editBus(bus.id);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteBus(bus.id);
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

//Add a New Bus
function addBus() {
    const busNumber = prompt('Enter the new bus number:');
    if (busNumber) {    
        const newBus = { id: buses.length + 1, number: busNumber };
        buses.push(newBus);
        loadBuses();
    }
}

// Edit an Existing Bus
function editBus(id) {
    const bus = buses.find(bus => bus.id === id);
    if (bus) {
        const newNumber = prompt('Edit bus number:', bus.number);
        if (newNumber) {
            bus.number = newNumber;
            loadBuses();
        }
    }
}

// Delete a Bus
function deleteBus(id) {
    const index = buses.findIndex(bus => bus.id === id);
    if (index !== -1) {
        const confirmDelete = confirm('Are you sure you want to delete this bus?');
        if (confirmDelete) {
            buses.splice(index, 1);
            loadBuses();
        }
    }
}

//Initialize the Table on Page Load
document.addEventListener('DOMContentLoaded', loadBuses);
