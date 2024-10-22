<?php
/*
Esta es la clase del sistema de SMS. No es compatible directamente con NotificationSender porque el método se llama sendSMS en lugar de send, y los nombres de los parámetros son diferentes.
*/
class SMSService {
    public function sendSMS(string $phoneNumber, string $text) {
        echo "Enviando SMS a $phoneNumber: $text\n";
    }
}
?>
