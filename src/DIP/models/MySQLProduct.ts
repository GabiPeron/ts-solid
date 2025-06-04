import IDbProduct from "../interfaces/IDbProduct";

export default class MySQLProduct implements IDbProduct {
  getProductById(productId: number): {
    id: number;
    name: string;
    price: number;
  } {
    // Simulating a database call
    console.log('Fetching product from MySQL database...');
    return { id: productId, name: 'Sample Product', price: 100 };
  }
}
