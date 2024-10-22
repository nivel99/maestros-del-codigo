// ejemplo1.ts
import { EmailSender } from "./EmailSender";
import { SMSAdapter } from "./SMSAdapter";
import { SMSService } from "./SMSService";

// Usando EmailSender
const emailSender: EmailSender = new EmailSender();
emailSender.send("usuario@correo.com", "Hola, esta es una notificación por correo.");

// Usando SMSService a través del Adaptador
const smsService: SMSService = new SMSService();
const smsAdapter: SMSAdapter = new SMSAdapter(smsService);
smsAdapter.send("1234567890", "Hola, esta es una notificación por SMS.");

//Para ejecutar primero es npx tsc ejemplo1.ts luego node ejemplo1.js