# Sistema de Gestión de Stock y Pedidos

Sistema web para pequeñas empresas (tiendas, ferreterías, farmacias, restaurantes) desarrollado con Node.js, Express y MongoDB.

## 🚀 Características

- ✅ Autenticación JWT con bcrypt
- ✅ CRUD completo de productos con stock
- ✅ Gestión de pedidos (descuenta stock automáticamente)
- ✅ Cancelación de pedidos (devuelve stock)
- ✅ Clean Architecture
- ✅ MongoDB Atlas
- ✅ Listo para despliegue en Render

## 🛠️ Tecnologías

- **Backend:** Node.js + Express
- **Base de datos:** MongoDB Atlas (Mongoose)
- **Autenticación:** JWT + bcrypt
- **Arquitectura:** Clean Architecture
- **Despliegue:** Render

## 📋 Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Login (obtiene JWT)

### Productos (requieren JWT)
- `GET /api/products` - Listar productos
- `POST /api/products` - Crear producto
- `GET /api/products/:id` - Ver producto
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

### Pedidos (requieren JWT)
- `GET /api/orders` - Listar pedidos
- `POST /api/orders` - Crear pedido (descuenta stock)
- `GET /api/orders/:id` - Ver pedido con detalles
- `PUT /api/orders/:id/cancel` - Cancelar pedido (devuelve stock)

## 🚀 Instalación y uso

### Desarrollo local
```bash
npm install
npm run dev
```

### Producción
```bash
npm install
npm start
```

## 🌐 Variables de entorno

```env
PORT=3000
MONGO_URI=tu_mongodb_uri
JWT_SECRET=tu_jwt_secret
```

## 📊 Estructura del proyecto

```
src/
├── application/use-cases/     # Lógica de negocio
├── domain/models/             # Modelos de datos
├── infraestructura/
│   ├── controllers/           # Controladores HTTP
│   ├── repositories/          # Acceso a datos
│   ├── routers/               # Rutas HTTP
│   └── middlewares/           # Middleware JWT
├── config/                    # Configuración
└── app.js                     # Aplicación principal
```

## 👨‍💻 Autor

Santiago Aguirre - Proyecto Final SENA 2025