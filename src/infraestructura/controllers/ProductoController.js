import CreateProducto from '../../application/use-cases/producto/CreateProducto.js';
import GetProductos from '../../application/use-cases/producto/GetProductos.js';
import GetProductoById from '../../application/use-cases/producto/GetProductoById.js';
import UpdateProducto from '../../application/use-cases/producto/UpdateProducto.js';
import DeleteProducto from '../../application/use-cases/producto/DeleteProducto.js';

class ProductoController {
  static async create(req, res) {
    try {
      const producto = await new CreateProducto().execute(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const productos = await new GetProductos().execute();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const producto = await new GetProductoById().execute(req.params.id);
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const producto = await new UpdateProducto().execute(req.params.id, req.body);
      res.json(producto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const producto = await new DeleteProducto().execute(req.params.id);
      res.json({ message: 'Producto eliminado', producto });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ProductoController;