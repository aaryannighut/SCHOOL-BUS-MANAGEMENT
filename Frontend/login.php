<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Bus Management System</title>
    <link rel="stylesheet" href="login.css">
    <link rel="shortcut icon" href="https://img.icons8.com/?size=100&id=DCVzwScSnIKl&format=png&color=000000" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="navbar">
        <img src="https://img.icons8.com/?size=100&id=DCVzwScSnIKl&format=png&color=000000" class="buslogo"alt="School Bus Icon">
        <div class="logo">School Bus Management System</div>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#" class="login-btn">Login</a>
        </div>
    </div>
    <div class="login-container">
        <div class="login-box">
            <h2>Login</h2>
            <form id="loginform" method="post" action="register.php">
                <div class="input-group">
                    <label for="email">Username</label>
                    <div class="input-icon">
                        <input type="email" id="email" required>
                        <img src="https://img.icons8.com/?size=100&id=lgyS725ZKMwY&format=png&color=000000" alt="Username Icon">
                    </div>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <div class="input-icon">
                        <input type="password" id="password"required>
                        <img src="https://img.icons8.com/ios-filled/50/000000/password.png" alt="Password Icon">
                    </div>
                    <div class="select">
                        Select Your Role
                        <select name="select-control" id="inputRole" class="select_role">
                            <option value="S">Select Role</option>
                            <option value="A">Admin</option>
                            <option value="D">Driver</option>
                            <option value="P">Parents</option>
                        </select>
                    </div>
                </div>
                <div class="remember-forgot">
                    <div class="checkbox-group">
                        <input type="checkbox" id="remember-me">
                        <label for="remember-me">Remember me</label>
                        <a class="for" href="forgotpassword.html">Forgot Password?</a>
                    </div>
                </div>
                <button type="submit" class="loginbu" id="loginbtn">Login</button>
                <div class="register-link">
                    <p>Don't have an account?    <a href="register.html" class="reg" id="regbtn">Register</a></p>
                </div>
            </form> 
        </div>
    </div>
    <script src="login.css"></script>
</body>
</html>
