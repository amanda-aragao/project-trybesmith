import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsMock from '../../mocks/productsMock'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao enviar um produto sem seu nome, devolve um erro', async () => {
 
    //act 
    const httpResponse = await chai.request(app).post('/products').send(productsMock.wrongProduct);

    // asseert 
    expect(httpResponse.status).to.equal(404);
  })


  it('ao enviar um produto com todos os campos completos', async () => {
    //arrange
    //act 
    const httpResponse = await chai.request(app).post('/products').send(productsMock.rightProduct);

    // asseert 
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productsMock.rightProduct);
  })
});
