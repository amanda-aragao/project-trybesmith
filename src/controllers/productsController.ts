import { Request, Response } from 'express';
import productsService from '../services/productsService';



async function addNewProduct(req: Request, res: Response): Promise<Response> {

  const response = await productsService.addNewProduct(req.body);
    if(response){
      return res.status(201).json(response);
    }
    return res.status(404).json('ERROR')
}

export default {
   addNewProduct
};
