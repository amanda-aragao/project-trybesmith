import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import productsMock from '../../mocks/productsMock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('teste se a rota get retorna a lista de produtos completa', async () => {
   
    const httpResponse = await chai.request(app).get('/products').send(productsMock.listAllProduct);
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productsMock.listAllProduct);

  })
});
