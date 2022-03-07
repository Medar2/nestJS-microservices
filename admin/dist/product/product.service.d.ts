import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    create(data: any): Promise<Product>;
    findOne(id: any): Promise<Product>;
    update(id: number, data: any): Promise<any>;
    delete(id: any): Promise<any>;
}
