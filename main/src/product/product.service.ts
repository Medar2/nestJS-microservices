import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
   
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
    ) { }


    async findAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async create(data): Promise<Product> {
        const product = new this.productModel(data);
        return await product.save();
    }
    async findOne(id): Promise<Product> {
        return await this.productModel.findById(id).exec();
    }
    async update(id, data): Promise<any> {
        return await this.productModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id): Promise<void> {
        return await this.productModel.findByIdAndRemove(id);
    }

 }
 

