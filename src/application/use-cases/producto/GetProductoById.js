import ProductoRepositoryMongo from '../../../infraestructura/repositories/ProductoRepositoryMongo.js';

class GetProductoById {
  constructor() {
    this.productoRepository = new ProductoRepositoryMongo();
  }

  async execute(id) {
    const producto = await this.productoRepository.findById(id);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    return producto;
  }
}

export default GetProductoById;