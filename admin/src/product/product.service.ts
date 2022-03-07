import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor (
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async create(data): Promise<Product> {
        return await this.productRepository.save(data);
    }
     
    async findOne(id): Promise<Product> {
        return await this.productRepository.findOne(id);
    }

    async update(id:number, data): Promise<any> {
        //await this.productRepository.update(id, data);
        return await this.productRepository.update(id, data);
    }

    async delete(id): Promise<any> {
        return await this.productRepository.delete(id);
    }
}
