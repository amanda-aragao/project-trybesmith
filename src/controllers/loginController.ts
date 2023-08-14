import { Request, Response } from 'express';
import loginService from '../services/loginService';

async function userLogin(req: Request, res: Response): Promise<Response | void> {
  const response = await loginService.userLogin(req.body);

  return res.status(response.status).json(response.data);
}

export default {
  userLogin,
};
