"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSService = void 0;
// SMSService.ts
//SMSService tiene un método sendSMS que no es compatible directamente con NotificationSender.
var SMSService = /** @class */ (function () {
    function SMSService() {
    }
    SMSService.prototype.sendSMS = function (phoneNumber, text) {
        console.log("Enviando SMS a ".concat(phoneNumber, ": ").concat(text));
    };
    return SMSService;
}());
exports.SMSService = SMSService;
