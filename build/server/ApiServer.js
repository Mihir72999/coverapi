"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiServer = void 0;
const express_1 = __importDefault(require("express"));
const productRoute_1 = __importDefault(require("../routes/productRoute"));
class ApiServer {
    static run(port) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = (0, express_1.default)();
            app
                .use(express_1.default.json())
                .use(express_1.default.urlencoded({ extended: true }))
                .use('/api/v1', productRoute_1.default)
                .listen(port, () => console.log(`port is running on ${port}`));
        });
    }
}
exports.ApiServer = ApiServer;
