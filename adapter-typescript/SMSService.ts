// SMSService.ts
//SMSService tiene un método sendSMS que no es compatible directamente con NotificationSender.
export class SMSService {
    sendSMS(phoneNumber: string, text: string): void {
        console.log(`Enviando SMS a ${phoneNumber}: ${text}`);
    }
}