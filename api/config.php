<?php 

$host = "localhost";
$dbname = "appsdev";
$username = "root";
$password = "";


try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

?>