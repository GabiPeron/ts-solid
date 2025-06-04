import DbProductFactory from '../factory/DbProductFactory';

export default class Payment {
  pay(productId: number): boolean {
    const productDb = DbProductFactory.createDbProduct();
    const product = productDb.getProductById(productId);

    console.log(product);
    console.log('Payment successful for product ID:', productId);
    return true;
  }
}
