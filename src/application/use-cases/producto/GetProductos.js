import ProductoRepositoryMongo from '../../../infraestructura/repositories/ProductoRepositoryMongo.js';

class GetProductos {
  constructor() {
    this.productoRepository = new ProductoRepositoryMongo();
  }

  async execute() {
    return await this.productoRepository.findAll();
  }
}

export default GetProductos;