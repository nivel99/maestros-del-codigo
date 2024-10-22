<?php
require_once 'NotificationSender.php';
//Define un sistema de envío de correos que sigue la interfaz NotificationSender.
class EmailSender implements NotificationSender {
    public function send(string $recipient, string $message) {
        echo "Enviando correo a $recipient: $message\n";
    }
}
?>
