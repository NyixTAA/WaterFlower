const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('usuarios.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);
});

db.run(`INSERT OR IGNORE INTO usuarios (username, password) VALUES (?, ?)`, [
  "admin",
  "1234"
]);

module.exports = db;
