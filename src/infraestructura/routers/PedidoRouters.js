import { Router } from "express";
import PedidoController from "../controllers/PedidoController.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

router.post("/", PedidoController.create);
router.get("/", PedidoController.getAll);
router.get("/:id", PedidoController.getById);
router.put("/:id/cancel", PedidoController.cancel);

export default router;