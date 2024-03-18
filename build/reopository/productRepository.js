"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor(ripository) {
        this.ripository = ripository;
    }
    onCreate(input) {
        throw new Error("Method not implemented.");
    }
    onUpdate(input) {
        throw new Error("Method not implemented.");
    }
    getProduct() {
        return this.ripository.getP();
    }
    getBrandmodel() {
        throw new Error("Method not implemented.");
    }
}
exports.ProductRepository = ProductRepository;
