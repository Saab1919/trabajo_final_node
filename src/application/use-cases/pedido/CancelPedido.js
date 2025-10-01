import PedidoRepositoryMongo from '../../../infraestructura/repositories/PedidoRepositoryMongo.js';
import PedidoDetalleRepositoryMongo from '../../../infraestructura/repositories/PedidoDetalleRepositoryMongo.js';
import ProductoRepositoryMongo from '../../../infraestructura/repositories/ProductoRepositoryMongo.js';

class CancelPedido {
  constructor() {
    this.pedidoRepository = new PedidoRepositoryMongo();
    this.detalleRepository = new PedidoDetalleRepositoryMongo();
    this.productoRepository = new ProductoRepositoryMongo();
  }

  async execute(id) {
    const pedido = await this.pedidoRepository.findById(id);
    if (!pedido) {
      throw new Error('Pedido no encontrado');
    }

    if (pedido.estado === 'cancelado') {
      throw new Error('El pedido ya está cancelado');
    }

    // Obtener detalles del pedido
    const detalles = await this.detalleRepository.findByPedidoId(id);

    // Devolver stock
    for (const detalle of detalles) {
      await this.productoRepository.updateStock(detalle.productoId._id, detalle.cantidad);
    }

    // Cancelar pedido
    return await this.pedidoRepository.cancelar(id);
  }
}

export default CancelPedido;