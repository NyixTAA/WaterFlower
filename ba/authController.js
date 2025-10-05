const db = require('./database');

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ erro: "Informe usuário e senha." });
  }

  db.get(
    `SELECT * FROM usuarios WHERE username = ? AND password = ?`,
    [username, password],
    (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });

      if (!row) {
        return res.status(401).json({ erro: "Usuário ou senha inválidos." });
      }

      res.json({
        mensagem: "Login bem-sucedido!",
        usuario: { id: row.id, username: row.username }
      });
    }
  );
}

module.exports = { login };
