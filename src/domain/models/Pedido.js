import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  total: {
    type: Number,
    required: true,
    min: 0
  },
  estado: {
    type: String,
    enum: ['activo', 'cancelado'],
    default: 'activo'
  }
}, {
  timestamps: true
});

const Pedido = mongoose.model("Pedido", PedidoSchema);

export default Pedido;