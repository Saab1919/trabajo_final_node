import Producto from '../../domain/models/Producto.js';

class ProductoRepositoryMongo {
  async create(productoData) {
    const producto = new Producto(productoData);
    return await producto.save();
  }

  async findAll() {
    return await Producto.find();
  }

  async findById(id) {
    return await Producto.findById(id);
  }

  async update(id, productoData) {
    return await Producto.findByIdAndUpdate(id, productoData, { new: true });
  }

  async delete(id) {
    return await Producto.findByIdAndDelete(id);
  }

  async updateStock(id, cantidad) {
    return await Producto.findByIdAndUpdate(
      id, 
      { $inc: { stock: cantidad } }, 
      { new: true }
    );
  }
}

export default ProductoRepositoryMongo;