import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

        constructor(private productService: ProductService) {}

    @Get()
    all() {
        return this.productService.findAll();
    }

    @Post()
    create(
        @Body('title') title: string,
        @Body('image') image: string,
    ){
        return this.productService.create({
            title,
            image,
        });
    }

    @Get('/:id')
    asyngetOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }

    @Put('/:id')
    async update(
        @Param('id') id: number,
        @Body('title') title: string,
        @Body('image') image: string,
    ) {
        return await this.productService.update(id, {
            title,
            image,
        });
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        return await this.productService.delete(id);
    }
}
