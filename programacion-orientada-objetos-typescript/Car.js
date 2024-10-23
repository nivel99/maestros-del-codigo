"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Car.ts
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getMake = function () {
        return this.make;
    };
    Car.prototype.setMake = function (make) {
        this.make = make;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.setYear = function (year) {
        this.year = year;
    };
    Car.prototype.displayInfo = function () {
        console.log("Car: ".concat(this.make, " ").concat(this.model, " (").concat(this.year, ")"));
    };
    return Car;
}());
exports.Car = Car;
