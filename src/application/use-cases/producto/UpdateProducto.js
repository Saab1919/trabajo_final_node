import ProductoRepositoryMongo from '../../../infraestructura/repositories/ProductoRepositoryMongo.js';

class UpdateProducto {
  constructor() {
    this.productoRepository = new ProductoRepositoryMongo();
  }

  async execute(id, updateData) {
    const { precio, stock } = updateData;

    if (precio !== undefined && precio < 0) {
      throw new Error('El precio no puede ser negativo');
    }

    if (stock !== undefined && stock < 0) {
      throw new Error('El stock no puede ser negativo');
    }

    const producto = await this.productoRepository.update(id, updateData);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    return producto;
  }
}

export default UpdateProducto;