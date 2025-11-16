const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (index.html, script.js, etc.)
app.use(express.static(path.join(__dirname)));

// Ruta de ejemplo (API)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Servidor activo. ¡Hola desde el backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
