<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];

    $to = "youremail@example.com";  // 🔹 replace with your email
    $subject = "New Contact Message";
    $body = "Name: $name\nEmail: $email\nNumber: $number";

    // send mail
    if (mail($to, $subject, $body)) {
        echo "✅ Message sent successfully!";
    } else {
        echo "❌ Sorry, something went wrong.";
    }
}
?>