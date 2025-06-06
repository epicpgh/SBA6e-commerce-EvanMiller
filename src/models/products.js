"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, title, description, price, discountPercentage, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }
    Product.prototype.getPriceWithDiscount = function () {
        return this.price - (this.discountPercentage / 100) * this.price;
    };
    Product.prototype.displayDetails = function () {
        console.log("Product: ".concat(this.title));
        console.log("Product: ".concat(this.price.toFixed(2)));
        console.log("Product: ".concat(this.discountPercentage, "%"));
        console.log("Product: ".concat(this.getPriceWithDiscount().toFixed(2)));
    };
    return Product;
}());
exports.Product = Product;
