import { CreateCoffeeDto } from './coffee.dto';
export declare class CoffeeService {
    private prisma;
    getCoffee(): Promise<any>;
    getCoffeeById(id: number): Promise<any>;
    createCoffee(dto: CreateCoffeeDto): Promise<{
        message: string;
        cafe: any;
    }>;
}
