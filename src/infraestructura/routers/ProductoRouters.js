import { Router } from 'express';
import ProductoController from '../controllers/ProductoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

router.post('/', ProductoController.create);
router.get('/', ProductoController.getAll);
router.get('/:id', ProductoController.getById);
router.put('/:id', ProductoController.update);
router.delete('/:id', ProductoController.delete);

export default router;