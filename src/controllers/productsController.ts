import { Request, Response } from 'express';
import productsService from '../services/productsService';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

async function addNewProduct(req: Request, res: Response): Promise<Response> {  
  const response = await productsService.addNewProduct(req.body);
 
  return res.status(201).json(response);
}

async function listAllProduct(req: Request, res: Response): Promise<Response> {
  const response = await productsService.listAllProduct();

  return res.status(200).json(response);
}

export default {
  addNewProduct,
  listAllProduct,
};
