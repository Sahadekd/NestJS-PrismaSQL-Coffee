"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let CoffeeService = class CoffeeService {
    prisma = new client_1.PrismaClient();
    async getCoffee() {
        return this.prisma.cafe.findMany({ include: { tags: true } });
    }
    async getCoffeeById(id) {
        return this.prisma.cafe.findUnique({
            where: { id },
            include: { tags: true }
        });
    }
    async createCoffee(dto) {
        const cafe = await this.prisma.cafe.create({
            data: {
                nome: dto.nome,
                tipo: dto.tipo,
                preco: dto.preco,
                descricao: dto.descricao ?? '',
                tags: {
                    create: dto.tags.map(tag => ({ nome: tag })),
                },
            },
            include: { tags: true },
        });
        return {
            message: 'Café criado com sucesso',
            cafe,
        };
    }
};
exports.CoffeeService = CoffeeService;
exports.CoffeeService = CoffeeService = __decorate([
    (0, common_1.Injectable)()
], CoffeeService);
//# sourceMappingURL=coffee.service.js.map