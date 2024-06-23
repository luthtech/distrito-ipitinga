// app.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const textsRoutes = require('./routes/texts');
const creaturesRoutes = require('./routes/creatures');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Conectar ao banco de dados SQLite
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS tituloatas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, corpo TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS nomecraturas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, sigla TEXT)");
});

// Rotas
app.use('/', textsRoutes); // Prefixo '/api' para rotas de texts.js
app.use('/', creaturesRoutes); // Prefixo '/api' para rotas de creatures.js

// Rota para servir o arquivo de cadastro de títulos de reunião
app.get('/cadastrotitulosreuniao', (req, res) => {
    res.sendFile(__dirname + '/private/cadastrotitulosreuniao.html');
});

// Rota para servir o arquivo de cadastro de nomecraturas
app.get('/cadastronomecraturas', (req, res) => {
    res.sendFile(__dirname + '/private/cadastronomecraturas.html');
});

app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`);
});
