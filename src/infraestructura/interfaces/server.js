import "dotenv/config.js";
import connectDB from "../../config/database.js";
import app from "../../app.js";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo (desde server.js) en http://localhost:${PORT}`);
  });
});