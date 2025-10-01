import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true,
    enum: ['admin', 'vendedor'],
    default: 'vendedor'
  }
}, {
  timestamps: true
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
export default Usuario;