// SMSAdapter.ts
//La clase SMSAdapter implementa la interfaz NotificationSender, pero internamente usa SMSService. Actúa como el adaptador que traduce las llamadas del cliente.
import { NotificationSender } from "./NotificationSender";
import { SMSService } from "./SMSService";

export class SMSAdapter implements NotificationSender {
    private smsService: SMSService;

    constructor(smsService: SMSService) {
        this.smsService = smsService;
    }

    send(recipient: string, message: string): void {
        // Adaptamos la llamada para que funcione con el sistema SMS
        this.smsService.sendSMS(recipient, message);
    }
}