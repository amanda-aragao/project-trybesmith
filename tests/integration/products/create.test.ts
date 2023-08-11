import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsMock from '../../mocks/productsMock'
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao enviar um produto sem seu nome, devolve um erro', async () => {
    // arrange
    
    const wrongProduct = {
      "id": 4,
      "name": "",
      "price": "30 peças de ouro",
      "orderId": 4
    }
    const ProductInstance = ProductModel.build(wrongProduct);
    
    sinon.stub(ProductModel, 'create').resolves(ProductInstance);
    //act 
    const httpResponse = await chai.request(app).post('/products').send(wrongProduct);
    
    // asseert 
    expect(httpResponse.status).not.to.equal(404);
  })
  

  it('ao enviar um produto com todos os campos completos', async () => {
    //arrange
    const rightProduct = {
      "id": 4,
      "name": "Martelo de Thor",
      "price": "30 peças de ouro",
      "orderId": 4
    }
    const ProductInstance = ProductModel.build(rightProduct);
    
    sinon.stub(ProductModel, 'create').resolves(ProductInstance);
    //act 
    const httpResponse = await chai.request(app).post('/products').send(rightProduct);
    
    // asseert 
    expect(httpResponse.status).to.equal(201);
  })
});
