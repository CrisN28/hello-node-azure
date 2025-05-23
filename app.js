// archivo: app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde Node.js en Azure!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
