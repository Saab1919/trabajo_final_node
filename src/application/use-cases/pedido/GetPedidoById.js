import PedidoRepositoryMongo from '../../../infraestructura/repositories/PedidoRepositoryMongo.js';
import PedidoDetalleRepositoryMongo from '../../../infraestructura/repositories/PedidoDetalleRepositoryMongo.js';

class GetPedidoById {
  constructor() {
    this.pedidoRepository = new PedidoRepositoryMongo();
    this.detalleRepository = new PedidoDetalleRepositoryMongo();
  }

  async execute(id) {
    const pedido = await this.pedidoRepository.findById(id);
    if (!pedido) {
      throw new Error('Pedido no encontrado');
    }

    const detalles = await this.detalleRepository.findByPedidoId(id);
    
    return {
      ...pedido.toObject(),
      detalles
    };
  }
}

export default GetPedidoById;