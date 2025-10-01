import ProductoRepositoryMongo from '../../../infraestructura/repositories/ProductoRepositoryMongo.js';

class DeleteProducto {
  constructor() {
    this.productoRepository = new ProductoRepositoryMongo();
  }

  async execute(id) {
    const producto = await this.productoRepository.delete(id);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    return producto;
  }
}

export default DeleteProducto;