import PedidoRepositoryMongo from '../../../infraestructura/repositories/PedidoRepositoryMongo.js';
import PedidoDetalleRepositoryMongo from '../../../infraestructura/repositories/PedidoDetalleRepositoryMongo.js';
import ProductoRepositoryMongo from '../../../infraestructura/repositories/ProductoRepositoryMongo.js';

class CreatePedido {
  constructor() {
    this.pedidoRepository = new PedidoRepositoryMongo();
    this.detalleRepository = new PedidoDetalleRepositoryMongo();
    this.productoRepository = new ProductoRepositoryMongo();
  }

  async execute(pedidoData, usuarioId) {
    const { detalles } = pedidoData;

    if (!detalles || detalles.length === 0) {
      throw new Error('El pedido debe tener al menos un detalle');
    }

    let total = 0;

    // Verificar stock y calcular total
    for (const detalle of detalles) {
      const producto = await this.productoRepository.findById(detalle.productoId);
      if (!producto) {
        throw new Error(`Producto ${detalle.productoId} no encontrado`);
      }

      if (producto.stock < detalle.cantidad) {
        throw new Error(`Stock insuficiente para ${producto.nombre}. Stock disponible: ${producto.stock}`);
      }

      detalle.precioUnitario = producto.precio;
      detalle.subtotal = detalle.cantidad * producto.precio;
      total += detalle.subtotal;
    }

    // Crear pedido
    const pedido = await this.pedidoRepository.create({
      usuarioId,
      total,
      estado: 'activo'
    });

    // Crear detalles y actualizar stock
    for (const detalle of detalles) {
      await this.detalleRepository.create({
        pedidoId: pedido._id,
        productoId: detalle.productoId,
        cantidad: detalle.cantidad,
        precioUnitario: detalle.precioUnitario,
        subtotal: detalle.subtotal
      });

      // Descontar stock
      await this.productoRepository.updateStock(detalle.productoId, -detalle.cantidad);
    }

    return await this.pedidoRepository.findById(pedido._id);
  }
}

export default CreatePedido;