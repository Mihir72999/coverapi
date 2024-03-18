"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controller/productController");
const productInteractor_1 = require("../interactor/productInteractor");
const productRepository_1 = require("../reopository/productRepository");
const productRouter = (0, express_1.Router)({ strict: true, caseSensitive: false, mergeParams: true });
const interactor = new productInteractor_1.ProductInteractor();
const ripository = new productRepository_1.ProductRepository(interactor);
const product = new productController_1.ProudctController(ripository);
productRouter.get('/getProduct', product.onGetProduct.bind(product))
    .post('createProduct', product.onCreateProduct)
    .patch('/updateProduct', product.onUpdateProduct)
    .get('/getBrandmodel', product.onGetBrandModel);
exports.default = productRouter;
