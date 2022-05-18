import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];
  InsertProduct(title: string, discription: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, discription, price);
    this.products.push(newProduct);
    return prodId;
  }
}
