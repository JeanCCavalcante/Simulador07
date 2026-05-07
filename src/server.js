const express = require('express');
const movieRoutes = require('./routes/movieRoutes');
const connectDB = require('./config/db'); // Importe a conexão

const app = express();
connectDB();

app.use(express.json());

app.use(movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});