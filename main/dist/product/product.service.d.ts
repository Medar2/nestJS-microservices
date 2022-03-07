import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    findAll(): Promise<Product[]>;
}
