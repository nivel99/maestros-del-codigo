// EmailSender.ts
//Esta clase define un sistema de envío de correos electrónicos que implementa NotificationSender.
import { NotificationSender } from "./NotificationSender";

export class EmailSender implements NotificationSender {
    send(recipient: string, message: string): void {
        console.log(`Enviando correo a ${recipient}: ${message}`);
    }
}