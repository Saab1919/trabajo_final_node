import PedidoRepositoryMongo from '../../../infraestructura/repositories/PedidoRepositoryMongo.js';

class GetPedidos {
  constructor() {
    this.pedidoRepository = new PedidoRepositoryMongo();
  }

  async execute() {
    return await this.pedidoRepository.findAll();
  }
}

export default GetPedidos;