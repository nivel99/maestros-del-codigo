"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ejemplo1.ts
var EmailSender_1 = require("./EmailSender");
var SMSAdapter_1 = require("./SMSAdapter");
var SMSService_1 = require("./SMSService");
// Usando EmailSender
var emailSender = new EmailSender_1.EmailSender();
emailSender.send("usuario@correo.com", "Hola, esta es una notificación por correo.");
// Usando SMSService a través del Adaptador
var smsService = new SMSService_1.SMSService();
var smsAdapter = new SMSAdapter_1.SMSAdapter(smsService);
smsAdapter.send("1234567890", "Hola, esta es una notificación por SMS.");
