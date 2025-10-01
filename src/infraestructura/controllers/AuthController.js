import RegisterUser from '../../application/use-cases/auth/RegisterUser.js';
import LoginUser from '../../application/use-cases/auth/LoginUser.js';

class AuthController {
  static async register(req, res) {
    try {
      const { nombre, email, password, rol } = req.body;
      if (!nombre || !email || !password) {
        return res.status(400).json({ error: 'Faltan campos requeridos: nombre, email o password' });
      }
      const result = await new RegisterUser().execute({ nombre, email, password, rol });
      res.status(201).json({ message: 'Usuario registrado exitosamente', user: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: 'Email y password son requeridos' });
      }
      const result = await new LoginUser().execute({ email, password });
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

export default AuthController;