"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInteractor = void 0;
const connectDb_1 = __importDefault(require("../db/connectDb"));
class ProductInteractor {
    getB() {
        throw new Error("Method not implemented.");
    }
    create(input) {
        throw new Error("Method not implemented.");
    }
    update(input) {
        throw new Error("Method not implemented.");
    }
    getP() {
        return connectDb_1.default.products.findMany();
    }
}
exports.ProductInteractor = ProductInteractor;
