import { Product } from '../types/Product';
import ProductModel from '../database/models/product.model';

async function addNewProduct(product: Product): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}

export default {
  addNewProduct,
};
