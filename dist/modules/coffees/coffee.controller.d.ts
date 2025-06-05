import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './coffee.dto';
export declare class CoffeeController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeeService);
    getCoffee(): Promise<any>;
    getCoffeeDetails(id: string): Promise<any>;
    createCoffee(body: CreateCoffeeDto): Promise<{
        message: string;
        cafe: any;
    }>;
}
