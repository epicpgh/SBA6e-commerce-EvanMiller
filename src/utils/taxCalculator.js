"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    var taxRate = category === "groceries" ? 0.03 : 0.07;
    return price * taxRate;
}
