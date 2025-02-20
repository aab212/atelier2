<?php

// Define some constants
define("RECIPIENT_NAME", "Atelier Blanc");
define("RECIPIENT_EMAIL", "atelierblancstudio@gmail.com");

// Read the form values
$success = false;
$senderName = isset($_POST['username']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['username']) : "";
$senderEmail = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : "";
$message = isset($_POST['message']) ? preg_replace("/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message']) : "";

// Additional sanitization for the email
if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
    $senderEmail = "";
}

// Subject for the email
$subject = "New Contact Form Submission";

// If all values exist, send the email
if ($senderName && $senderEmail && $message) {
    $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
    $headers = "From: " . $senderName . " <" . $senderEmail . ">\r\n";
    $headers .= "Reply-To: " . $senderEmail . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $emailContent = "Name: " . $senderName . "\n";
    $emailContent .= "Email: " . $senderEmail . "\n\n";
    $emailContent .= "Message:\n" . $message . "\n";

    $success = mail($recipient, $subject, $emailContent, $headers);

    // Redirect after successful submission
    if ($success) {
        header('Location: contact.html?status=success');
        exit();
    } else {
        header('Location: contact.html?status=error');
        exit();
    }
} else {
    // Redirect after failed submission
    header('Location: contact.html?status=validation_error');
    exit();
}

?>
