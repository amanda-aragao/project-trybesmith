import { Product } from '../types/Product';
import ProductModel from '../database/models/product.model';

async function addNewProduct(product: Product): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}
async function listAllProduct(): Promise<Product[]> {
  const listProducts = await ProductModel.findAll();
  // console.log(listProducts);
  return listProducts.map((p) => p.dataValues);
}
export default {
  addNewProduct,
  listAllProduct,
};
