import IDbProduct from '../interfaces/IDbProduct';
import Db from '../models/Db';
import MongoDBProduct from '../models/MongoDBProduct';
import MySQLProduct from '../models/MySQLProduct';

export default class DbProductFactory {
  static createDbProduct(dbType: Db = Db.MONGODB): IDbProduct {
    switch (dbType) {
      case Db.MYSQL:
        return new MySQLProduct();
      case Db.MONGODB:
        return new MongoDBProduct();
      default:
        throw new Error('Unsupported database type');
    }
  }
}
