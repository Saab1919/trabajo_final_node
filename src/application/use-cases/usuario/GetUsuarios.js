import UsuarioRepositoryMongo from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';

class GetUsuarios {
  constructor() {
    this.usuarioRepository = new UsuarioRepositoryMongo();
  }

  async execute() {
    const usuarios = await this.usuarioRepository.findAll();
    return usuarios.map(user => {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    });
  }
}

export default GetUsuarios;