import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Promise<import("./product.model").Product[]>;
    like(id: number): Promise<any>;
    hello(product: any): Promise<void>;
    productUpdate(product: any): Promise<void>;
    productDelete(product: any): Promise<void>;
}
