const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Endpoint para salvar o texto
router.post('/cadastrotitulosreuniao', (req, res) => {
    const { titulo, corpo } = req.body;
    db.run("INSERT INTO tituloatas (titulo, corpo) VALUES (?, ?)", [titulo, corpo], function(err) {
        if (err) {
            return res.send({ success: false, error: err.message });
        }
        res.send({ success: true, id: this.lastID });
    });
});

// Endpoint para obter todos os textos salvos
router.get('/titulosreuniao', (req, res) => {
    db.all("SELECT * FROM tituloatas", [], (err, rows) => {
        if (err) {
            return res.send({ success: false, error: err.message });
        }
        res.send({ success: true, texts: rows });
    });
});

module.exports = router;