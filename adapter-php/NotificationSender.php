<?php
//Esta interfaz asegura que cualquier clase que implemente NotificationSender tenga el método send.
interface NotificationSender {
    public function send(string $recipient, string $message);
}
?>
