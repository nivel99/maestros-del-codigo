"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSAdapter = void 0;
var SMSAdapter = /** @class */ (function () {
    function SMSAdapter(smsService) {
        this.smsService = smsService;
    }
    SMSAdapter.prototype.send = function (recipient, message) {
        // Adaptamos la llamada para que funcione con el sistema SMS
        this.smsService.sendSMS(recipient, message);
    };
    return SMSAdapter;
}());
exports.SMSAdapter = SMSAdapter;
