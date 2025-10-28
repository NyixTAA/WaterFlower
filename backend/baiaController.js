const db = require('./database');

function baias(req, res) {
  const { nome, ip } = req.body;

  if (!username || !password) {
    return res.status(400).json({ erro: "Informe Nome e IP da Baia!" });
  }

  db.get(
    `SELECT * FROM baias WHERE nome = ? AND ip = ?`,
    [nome, ip],
    (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });

      if (!row) {
        return res.status(401).json({ erro: "Nome ou ip inválidos." });
      }

      res.json({
        mensagem: "Baia cadastrada com sucesso!",
        baia: { nome: row.nome, ip: row.ip }
      });
    }
  );
}

module.exports = { baias };