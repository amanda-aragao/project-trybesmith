import bcrypt from 'bcryptjs';
import { User } from '../types/User';
import UserModel from '../database/models/user.model';
import JWT from '../utils/jwt.token';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';

async function userLogin(user: User): Promise<ServiceResponse<Token>> {
  const userResult = await UserModel.findOne({ where: { username: user.username } });
  if (!userResult || !bcrypt.compareSync(user.password, userResult.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  
  const { username, password } = userResult.dataValues;

  const tokenString = JWT.sign({ username, password });
  const token: Token = { token: tokenString };
  return { status: 200, data: token };
}

export default {
  userLogin,
};