import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCoffeeDto } from './coffee.dto';

@Injectable()
export class CoffeeService {
  private prisma = new PrismaClient();

  async getCoffee() {
    return this.prisma.cafe.findMany({ include: { tags: true } });
  }

  async getCoffeeById(id: number) {
    return this.prisma.cafe.findUnique({
      where: { id },
      include: { tags: true }
    });
  }

  async createCoffee(dto: CreateCoffeeDto) {
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
}
