export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    reviews: Array<object>;
}