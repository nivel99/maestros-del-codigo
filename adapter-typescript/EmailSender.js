"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSender = void 0;
var EmailSender = /** @class */ (function () {
    function EmailSender() {
    }
    EmailSender.prototype.send = function (recipient, message) {
        console.log("Enviando correo a ".concat(recipient, ": ").concat(message));
    };
    return EmailSender;
}());
exports.EmailSender = EmailSender;
