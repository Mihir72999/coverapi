"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, availableQty, image, brand, brandmodel) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.availableQty = availableQty;
        this.image = image;
        this.brand = brand;
        this.brandmodel = brandmodel;
    }
}
exports.Product = Product;
