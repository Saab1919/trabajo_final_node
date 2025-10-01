import UsuarioRepositoryMongo from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';

class GetUsuarioById {
  constructor() {
    this.usuarioRepository = new UsuarioRepositoryMongo();
  }

  async execute(id) {
    const usuario = await this.usuarioRepository.findById(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    
    const { password, ...userWithoutPassword } = usuario.toObject();
    return userWithoutPassword;
  }
}

export default GetUsuarioById;