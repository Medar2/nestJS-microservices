import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

    constructor(
        private productService: ProductService){ }

        @Get()
        async findAll() {
            return await this.productService.findAll();
        }

        @EventPattern('hello')
        async hello(data: string) {
            console.log('Entro en el evento hello');
            console.log('Entro en el evento hello');
        }

}
