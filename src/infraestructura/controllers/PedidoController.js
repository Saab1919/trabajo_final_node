import CreatePedido from "../../application/use-cases/pedido/CreatePedido.js";
import GetPedidos from "../../application/use-cases/pedido/GetPedidos.js";
import GetPedidoById from "../../application/use-cases/pedido/GetPedidoById.js";
import CancelPedido from "../../application/use-cases/pedido/CancelPedido.js";

class PedidoController {
  static async create(req, res) {
    try {
      const { detalles } = req.body;
      if (!detalles || !Array.isArray(detalles) || detalles.length === 0) {
        return res.status(400).json({ error: 'El campo detalles es requerido y debe ser un array con al menos un elemento.' });
      }
      const pedido = await new CreatePedido().execute(req.body, req.user.id);
      res.status(201).json(pedido);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const pedidos = await new GetPedidos().execute();
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const pedido = await new GetPedidoById().execute(req.params.id);
      res.json(pedido);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async cancel(req, res) {
    try {
      const pedido = await new CancelPedido().execute(req.params.id);
      res.json({ message: 'Pedido cancelado exitosamente', pedido });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

export default PedidoController;