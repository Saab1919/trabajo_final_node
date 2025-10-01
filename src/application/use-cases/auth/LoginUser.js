import UsuarioRepositoryMongo from '../../../infraestructura/repositories/UsuarioRepositoryMongo.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class LoginUser {
  constructor() {
    this.usuarioRepository = new UsuarioRepositoryMongo();
  }

  async execute(credentials) {
    const { email, password } = credentials;

    // Buscar usuario por email
    const user = await this.usuarioRepository.findByEmail(email);
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Credenciales inválidas');
    }

    // Generar JWT
    const token = jwt.sign(
      { 
        id: user._id, 
        email: user.email, 
        rol: user.rol 
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      token,
      user: {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol
      }
    };
  }
}

export default LoginUser;