import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    findAll(): Promise<Product[]>;
    create(data: any): Promise<Product>;
    findOne(id: any): Promise<Product>;
    update(id: any, data: any): Promise<any>;
    delete(id: any): Promise<void>;
}
