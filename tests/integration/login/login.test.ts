import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMocks from '../../mocks/loginMocks';
import UserModel from '../../../src/database/models/user.model';


chai.use(chaiHttp);

describe('POST /login', function () {
  beforeEach(function () { sinon.restore(); });

  it(' Teste se o usuário inserir senha e password corretos existentes no banco de dados', async function () {
    const userInstance = UserModel.build(loginMocks.loginWithHash);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);
    const response = await chai.request(app)
      .post('/login')
      .send(loginMocks.userExist);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.key('token');
  });

  it(' Teste se o usuário inserir senha e password incorretos retorne um erro', async function () {
    const userInstance = UserModel.build(loginMocks.userNotExists);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);
    const response = await chai.request(app)
      .post('/login')
      .send(loginMocks.userExist);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it(' Teste se o usuário inserir só sua senha e não o username', async function () {
    const userInstance = UserModel.build(loginMocks.loginWithHash);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);
    const response = await chai.request(app)
      .post('/login')
      .send(loginMocks.loginWithoutUserName);
    expect(response.status).to.be.equal(400);

    expect(response.body).to.be.deep.equal({ "message": "\"username\" and \"password\" are required" });
  });

  it(' Teste se retorna erro caso o login possuir um name inexistente no banco de dados', async function () {
    const userInstance = UserModel.build(loginMocks.loginWithHash);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);
    const response = await chai.request(app)
      .post('/login')
      .send(loginMocks.userNotExists);
    expect(response.status).to.be.equal(401);

    expect(response.body).to.be.deep.equal({ "message": "Username or password invalid" });
  });
});
