<?php
$servername = "localhost";  
$username = "root";        
$password = "";             
$dbname = "powerbidb";    

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number'];


    $stmt = $conn->prepare("INSERT INTO users (name , email,number) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email,$phone);

    if ($stmt->execute()) {
        echo "New record created successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>