import IDbProduct from "../interfaces/IDbProduct";

export default class MongoDBProduct implements IDbProduct {
  getProductById(productId: number): {
    id: number;
    name: string;
    price: number;
  } {
    // Simulating a database call
    console.log('Fetching product from MongoDB database...');
    return { id: productId, name: 'Sample Product', price: 100 };
  }
}