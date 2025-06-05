"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeController = void 0;
const common_1 = require("@nestjs/common");
const coffee_service_1 = require("./coffee.service");
const coffee_dto_1 = require("./coffee.dto");
let CoffeeController = class CoffeeController {
    coffeeService;
    constructor(coffeeService) {
        this.coffeeService = coffeeService;
    }
    async getCoffee() {
        return this.coffeeService.getCoffee();
    }
    async getCoffeeDetails(id) {
        return this.coffeeService.getCoffeeById(+id);
    }
    async createCoffee(body) {
        return this.coffeeService.createCoffee(body);
    }
};
exports.CoffeeController = CoffeeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "getCoffee", null);
__decorate([
    (0, common_1.Get)(':id/detalhes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "getCoffeeDetails", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coffee_dto_1.CreateCoffeeDto]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "createCoffee", null);
exports.CoffeeController = CoffeeController = __decorate([
    (0, common_1.Controller)('coffees'),
    __metadata("design:paramtypes", [coffee_service_1.CoffeeService])
], CoffeeController);
//# sourceMappingURL=coffee.controller.js.map