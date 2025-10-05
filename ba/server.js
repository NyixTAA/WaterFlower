const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { login } = require('./authController');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', login);

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
