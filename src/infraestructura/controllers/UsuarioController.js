import GetUsuarios from '../../application/use-cases/usuario/GetUsuarios.js';
import GetUsuarioById from '../../application/use-cases/usuario/GetUsuarioById.js';

class UsuarioController {
  static async getAll(req, res) {
    try {
      const getUsuarios = new GetUsuarios();
      const usuarios = await getUsuarios.execute();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const getUsuarioById = new GetUsuarioById();
      const usuario = await getUsuarioById.execute(req.params.id);
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UsuarioController;