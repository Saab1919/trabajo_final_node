import UsuarioRepositoryMongo from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';
import bcrypt from 'bcryptjs';

class RegisterUser {
  constructor() {
    this.usuarioRepository = new UsuarioRepositoryMongo();
  }

  async execute(userData) {
    const { nombre, email, password, rol = 'vendedor' } = userData;

    // Verificar si el usuario ya existe
    const existingUser = await this.usuarioRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const newUser = await this.usuarioRepository.create({
      nombre,
      email,
      password: hashedPassword,
      rol
    });

    // Remover password de la respuesta
    const { password: _, ...userResponse } = newUser.toObject();
    return userResponse;
  }
}

export default RegisterUser;