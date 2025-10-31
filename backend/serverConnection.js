const express = require("express");
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json()); // necessário para o Node entender JSON vindo do Arduino

const ESP_IP = "http://192.168.137.32";

let ultimoDado = 0;

// rota que recebe os dados do Arduino
app.post("/dados", (req, res) => {
  const dados = req.body;

  // Exemplo esperado: { "valor": 875 }
  console.log("DADOS RECEBIDOS:", dados);

  // guarda apenas o valor numérico
  if (dados && typeof dados.valor === "number") {
    ultimoDado = dados.valor;
    res.send("dados recebidos com sucesso.");
  } else {
    res.status(400).send("Formato inválido. Envie JSON no formato { \"valor\": numero }");
  }
});

// rota que retorna o valor normalizado (entre 0 e 1)
app.get("/dados", (req, res) => {
  const valorNormalizado = ultimoDado / 1023;
  res.json({ valorNormalizado });
});

// rotas de controle do ESP
app.get("/iniciar", async (req, res) => {
  try {
    const response = await fetch(`${ESP_IP}/irrigar`);
    const text = await response.text();
    res.send({ status: "ok", message: text });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "error", message: "Falha ao conectar ao ESP8266" });
  }
});

app.get("/parar", async (req, res) => {
  try {
    const response = await fetch(`${ESP_IP}/parar`);
    const text = await response.text();
    res.send({ status: "ok", message: text });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "error", message: "Falha ao conectar ao ESP8266" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor Node rodando na porta ${PORT}`));
