import ProductoRepositoryMongo from '../../../infraestructura/repositories/ProductoRepositoryMongo.js';

class CreateProducto {
  constructor() {
    this.productoRepository = new ProductoRepositoryMongo();
  }

  async execute(productoData) {
    const { nombre, descripcion, precio, stock, categoria } = productoData;

    if (precio < 0) {
      throw new Error('El precio no puede ser negativo');
    }

    if (stock < 0) {
      throw new Error('El stock no puede ser negativo');
    }

    return await this.productoRepository.create({
      nombre,
      descripcion,
      precio,
      stock,
      categoria
    });
  }
}

export default CreateProducto;