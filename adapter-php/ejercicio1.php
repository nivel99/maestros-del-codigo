<?php
require_once 'EmailSender.php';
require_once 'SMSAdapter.php';

// Usando EmailSender
$emailSender = new EmailSender();
$emailSender->send("usuario@correo.com", "Hola, esta es una notificación por correo.");

// Usando SMSService a través del Adaptador
$smsService = new SMSService();
$smsAdapter = new SMSAdapter($smsService);
$smsAdapter->send("1234567890", "Hola, esta es una notificación por SMS.");
?>