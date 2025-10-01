import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./infraestructura/routers/AuthRouters.js";
import usuarioRoutes from "./infraestructura/routers/UsuarioRouters.js";
import productoRoutes from "./infraestructura/routers/ProductoRouters.js";
import pedidoRoutes from "./infraestructura/routers/PedidoRouters.js";
import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de autenticación (no requieren JWT)
app.use("/api/auth", authRoutes);

// Rutas protegidas (requieren JWT)
app.use("/api/products", productoRoutes);
app.use("/api/orders", pedidoRoutes);
app.use("/api/usuarios", usuarioRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "Sistema de Gestión de Stock y Pedidos - API funcionando" });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📋 Endpoints disponibles:`);
    console.log(`   POST /api/auth/register`);
    console.log(`   POST /api/auth/login`);
    console.log(`   GET  /api/products`);
    console.log(`   POST /api/products`);
    console.log(`   GET  /api/orders`);
    console.log(`   POST /api/orders`);
  });
});

export default app;