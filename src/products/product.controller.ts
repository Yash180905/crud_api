import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('discription') prodDescreaption: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.ProductsService.InsertProduct(
      prodTitle,
      prodDescreaption,
      prodPrice,
    );
    return { id: generatedId };
  }
}
