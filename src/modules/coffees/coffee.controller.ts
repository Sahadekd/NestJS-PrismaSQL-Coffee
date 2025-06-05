import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './coffee.dto';

@Controller('coffees')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async getCoffee() {
    return this.coffeeService.getCoffee();
  }

  @Get(':id/detalhes')
  async getCoffeeDetails(@Param('id') id: string) {
    return this.coffeeService.getCoffeeById(+id); 
  }

  @Post('create')
  async createCoffee(@Body() body: CreateCoffeeDto) {
    return this.coffeeService.createCoffee(body);
  }
}
