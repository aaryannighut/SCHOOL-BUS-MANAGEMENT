// Sample Data
const routes = [
    { id: "RT-1001", cities: "City A, City B", bus: "Bus 101", time: "10:00 AM" },
    { id: "RT-1002", cities: "City C, City D", bus: "Bus 202", time: "2:00 PM" }
];

// Load Routes into the Table
function loadRoutes() {
    const tableBody = document.getElementById("route-table");
    tableBody.innerHTML = ""; // Clear existing rows

    routes.forEach((route, index) => {
        const row = document.createElement("tr");

        // Route Details
        row.innerHTML = `
            <td>${route.id}</td>
            <td>${route.cities}</td>
            <td>${route.bus}</td>
            <td>${route.time}</td>
            
    
        `;
        //Actions Column
        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Complete';
        editButton.classList.add('complete-btn');
        editButton.onclick = () => editBus(bus.id);
        const deleteButton = document.createElement('button');
        // deleteButton.textContent = 'DELETE';
        // deleteButton.classList.add('delete-btn');
        // deleteButton.onclick = () => deleteBus(bus.id);
        actionsCell.appendChild(editButton);
        // actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);


        tableBody.appendChild(row);
    });
}

// Add a New Route
function addRoute() {
    const id = prompt("Enter Route ID:");
    const cities = prompt("Enter Via Cities:");
    const bus = prompt("Enter Bus Name:");
    const time = prompt("Enter Departure Time:");
    const cost = prompt("Enter Cost:");

    if (id && cities && bus  && time && cost) {
        routes.push({ id, cities, bus, time, cost });
        loadRoutes();
    } else {
        alert("All fields are required!");
    }
}
// Edit an Existing Route
function editRoute(index) {
    const route = routes[index];
    const cities = prompt("Edit Via Cities:", route.cities);
    const bus = prompt("Edit Bus Name:", route.bus);
    const time = prompt("Edit Departure Time:", route.time);
    const cost = prompt("Edit Cost:", route.cost);

    if (cities && bus && time && cost) {
        routes[index] = { ...route, cities, bus, time, cost };
        loadRoutes();
    } else {
        alert("All fields are required!");
    }
}

// Delete a Route
function deleteRoute(index) {
    const confirmDelete = confirm("Are you sure you want to delete this route?");
    if (confirmDelete) {
        routes.splice(index, 1);
        loadRoutes();
    }
}

// Initialize the Table on Page Load
document.addEventListener("DOMContentLoaded", loadRoutes);
