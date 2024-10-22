<?php
require_once 'NotificationSender.php';
require_once 'SMSService.php';

/*
La clase SMSAdapter implementa la interfaz NotificationSender, pero internamente usa SMSService. Actúa como un adaptador para traducir las llamadas del cliente al sistema de SMS.
*/

class SMSAdapter implements NotificationSender {
    private $smsService;

    public function __construct(SMSService $smsService) {
        $this->smsService = $smsService;
    }

    public function send(string $recipient, string $message) {
        // Adaptamos la llamada para que funcione con el sistema SMS
        $this->smsService->sendSMS($recipient, $message);
    }
}
?>
