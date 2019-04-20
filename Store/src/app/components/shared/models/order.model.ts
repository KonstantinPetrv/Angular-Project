import { Product } from './product.model';

export interface Order {
    creator: string;
    products: Array<Product>;
    status: string;
}