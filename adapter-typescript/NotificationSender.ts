// NotificationSender.ts
//Esta interfaz asegura que cualquier clase que implemente NotificationSender tenga el método send.
export interface NotificationSender {
    send(recipient: string, message: string): void;
}
