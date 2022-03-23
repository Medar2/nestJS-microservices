import { Controller, Get, Param, Post } from '@nestjs/common';
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

        @Post('id/like')
        async like(@Param('id') id: number) {
            const product = await this.productService.findOne(id);
            return this.productService.update(id, {
                likes: product.likes + 1
            });
        }

        @EventPattern('hello')
        async hello(data: string) {
            console.log('Entro en el evento hello');            
        }

        @EventPattern('product_created')
        async productCreate(product: any) {
            await this.productService.create({
                id: product.id,
                title: product.title,
                image: product.image,
                likes: product.likes
            });
        }

        @EventPattern('product_updated')
        async productUpdate(product: any) {
            await this.productService.update(product.id, {
                title: product.title,
                image: product.image,
                likes: product.likes
            });
        }   

        @EventPattern('product_deleted')
        async productDelete(product: any) {
            await this.productService.delete(product.id);
        }

}
