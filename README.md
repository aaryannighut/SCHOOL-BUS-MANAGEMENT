# 📌 School Bus Management System (SBMS)

A professional, web-based management solution designed to streamline school bus operations, monitor routes, and manage student transportation efficiently.

---

## 📖 Project Description
The **School Bus Management System** is a robust platform built to solve real-world logistical challenges in school transportation. It allows administrators to manage a fleet of buses, assign drivers to specific routes, and handle student/parent bookings. This system ensures safety, transparency, and organized data management for educational institutions.

## 🚀 Features
- **Admin Dashboard**: Centralized control for all operations (Overview, Analytics).
- **Bus Management**: Add, update, and track bus details (Bus Numbers, Capacities).
- **Route Management**: Define routes, stops, and departure schedules.
- **Booking System**: Manage student and parent seat bookings with PNR generation.
- **Role-Based Access**: Specialized panels for Admins, Drivers, and Parents.
- **User Management**: Simple registration and login for all stakeholders.
- **Driver Assignment**: Efficiently link drivers to specific buses and routes.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript
- **Backend**: PHP (Main), Node.js/Express (API support)
- **Database**: MySQL (MariaDB)
- **Environment**: XAMPP / WAMP

## 📂 Project Structure
```text
SCHOOL BUS MANAGEMENT/
├── Frontend/           # Core PHP & Web application files
│   ├── Driver/         # Driver-specific views
│   ├── Parents/        # Parent-specific views
│   ├── admin_*.php     # Administrative control files
│   ├── login.php       # User authentication
│   └── register.php    # User registration
├── Backend/            # Node.js API and logic (if applicable)
├── database.php        # Centralized DB connection settings
├── .gitignore          # Version control exclusions
└── README.md           # Project documentation
```

## ⚙️ Installation & Setup Guide
To run this project locally, follow these steps:

1. **Install XAMPP**: Download and install [XAMPP](https://www.apachefriends.org/) (Version 8.0+ recommended).
2. **Clone the Project**: Download the project files and place them in the `htdocs` folder of your XAMPP installation (usually `C:\xampp\htdocs\SBMS`).
3. **Start Servers**: Open the XAMPP Control Panel and start **Apache** and **MySQL**.
4. **Configure Port**: If you encounter a MySQL port conflict (e.g., port 3306 is in use), change the MySQL port to **3307** in `my.ini` and XAMPP settings.

## 🗄️ Database Setup
1. Open your browser and go to `http://localhost/phpmyadmin/`.
2. Create a new database named `school_bus`.
3. Select the `school_bus` database and click the **Import** tab.
4. Choose the `school_bus.sql` file (available in your `Downloads` or project root).
5. Click **Go** to import all tables and sample data.

## ▶️ How to Run the Project
1. Ensure Apache and MySQL are running in XAMPP.
2. Open your web browser.
3. Type the following URL in the address bar:
   `http://localhost/SBMS/Frontend/login.php`
4. Use the following **Admin Credentials** for testing:
   - **Email**: `admin@gmail.com`
   - **Password**: `Admin@123`

## 🖥️ Screenshots
*(Screenshots of the Admin Dashboard, Booking System, and Login Page will be added here)*
- ![alt text](<Screenshot 2025-04-18 190907.png>)
- ![alt text](<Screenshot 2025-04-18 191038.png>)
- ![alt text](<Screenshot 2025-04-18 191129.png>)
- ![alt text](<Screenshot 2025-04-18 191257.png>)
- ![alt text](<Screenshot 2025-04-18 213654.png>)

## 🤝 Contributors
- **Aaryan Nighut** - *Lead Developer*
- Aarya Nighut 
- Ekanksh Mohite
- Rahul Yadav

## 📜 License
This project is licensed under the **MIT License** - see the LICENSE file for details.

## 🙌 Acknowledgements
- Thanks to the open-source community for the icons and fonts (Icons8, Google Fonts, FontAwesome).
- Special thanks to XAMPP for providing a seamless local development environment.
