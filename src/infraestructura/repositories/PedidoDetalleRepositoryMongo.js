import PedidoDetalle from "../../domain/models/PedidoDetalle.js";

class PedidoDetalleRepositoryMongo {
  async create(detalle) {
    const nuevo = new PedidoDetalle(detalle);
    return await nuevo.save();
  }

  async findByPedidoId(pedidoId) {
    return await PedidoDetalle.find({ pedidoId }).populate('productoId', 'nombre precio');
  }

  async deleteByPedidoId(pedidoId) {
    return await PedidoDetalle.deleteMany({ pedidoId });
  }
}

export default PedidoDetalleRepositoryMongo;