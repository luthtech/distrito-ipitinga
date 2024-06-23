const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Endpoint para salvar novas criaturas
router.post('/cadastronomecraturas', (req, res) => {
    const { titulo, sigla } = req.body;
    db.run("INSERT INTO nomecraturas (titulo, sigla) VALUES (?, ?)", [titulo, sigla], function(err) {
        if (err) {
            return res.send({ success: false, error: err.message });
        }
        res.send({ success: true, id: this.lastID });
    });
});

// Endpoint para obter os nomes das criaturas
router.get('/nomecraturas', (req, res) => {
    db.all("SELECT * FROM nomecraturas", [], (err, rows) => {
        if (err) {
            return res.send({ success: false, error: err.message });
        }
        res.send({ success: true, texts: rows });
    });
});

module.exports = router;