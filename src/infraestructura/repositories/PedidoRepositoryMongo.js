import Pedido from "../../domain/models/Pedido.js";

class PedidoRepositoryMongo {
  async create(pedido) {
    const nuevo = new Pedido(pedido);
    return await nuevo.save();
  }

  async findAll() {
    return await Pedido.find().populate('usuarioId', 'nombre email').sort({ createdAt: -1 });
  }

  async findById(id) {
    return await Pedido.findById(id).populate('usuarioId', 'nombre email');
  }

  async update(id, data) {
    return await Pedido.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Pedido.findByIdAndDelete(id);
  }

  async cancelar(id) {
    return await Pedido.findByIdAndUpdate(
      id, 
      { estado: 'cancelado' }, 
      { new: true }
    );
  }
}

export default PedidoRepositoryMongo;