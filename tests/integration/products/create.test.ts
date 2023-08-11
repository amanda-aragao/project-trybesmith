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
    

    const ProductInstance = ProductModel.build(productsMock.wrongProduct);
    
    sinon.stub(ProductModel, 'create').resolves(ProductInstance);
    //act 
    const httpResponse = await chai.request(app).post('/products').send(productsMock.wrongProduct);
    
    // asseert 
    expect(httpResponse.status).not.to.equal(404);
  })
  

  it('ao enviar um produto com todos os campos completos', async () => {
    //arrange
    const ProductInstance = ProductModel.build(productsMock.rightProduct);
    
    sinon.stub(ProductModel, 'create').resolves(ProductInstance);
    //act 
    const httpResponse = await chai.request(app).post('/products').send(productsMock.rightProduct);
    
    // asseert 
    expect(httpResponse.status).to.equal(201);
  })
});
