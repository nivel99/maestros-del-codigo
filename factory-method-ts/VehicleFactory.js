"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory = void 0;
var Car_1 = require("./Car");
var Bike_1 = require("./Bike");
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.create = function (type) {
        switch (type) {
            case "car":
                return new Car_1.Car();
            case "bike":
                return new Bike_1.Bike();
            default:
                throw new Error("Tipo de vehículo no soportado");
        }
    };
    return VehicleFactory;
}());
exports.VehicleFactory = VehicleFactory;
