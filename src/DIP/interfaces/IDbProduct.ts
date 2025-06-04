export default interface IDbProduct {
  getProductById(productId: number): {
    id: number;
    name: string;
    price: number;
  };
}
