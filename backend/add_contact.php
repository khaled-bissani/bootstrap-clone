<?php 

include("connection.php");

$full_name = $_POST["fullname"];
$email = $_POST["email"];
$phone_number = $_POST["phonenumber"];
$message = $_POST["message"];


$query = $mysqli->prepare("INSERT INTO contacts(full_name, email, phone_number,message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $full_name, $email, $phone_number, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);


?>