import Usuario from '../../domain/models/Usuario.js';

class UsuarioRepositoryMongo {
  async create(usuarioData) {
    const usuario = new Usuario(usuarioData);
    return await usuario.save();
  }

  async findAll() {
    return await Usuario.find();
  }

  async findById(id) {
    return await Usuario.findById(id);
  }

  async findByEmail(email) {
    return await Usuario.findOne({ email });
  }

  async update(id, usuarioData) {
    return await Usuario.findByIdAndUpdate(id, usuarioData, { new: true });
  }

  async delete(id) {
    return await Usuario.findByIdAndDelete(id);
  }
}

export default UsuarioRepositoryMongo;