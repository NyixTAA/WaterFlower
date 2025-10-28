const express = require("express");
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express()
app.use(cors())

const ESP_IP = "http://192.168.0.105"

app.get("/iniciar", async (req, res) => {
  try {
    const response = await fetch(`${ESP_IP}/irrigar`)
    const text = await response.text()
    res.send({ status: "ok", message: text })
  } catch (err) {
    console.error(err)
    res.status(500).send({ status: "error", message: "Falha ao conectar ao ESP8266" })
  }
});

app.get("/parar", async (req, res) => {
  try {
    const response = await fetch(`${ESP_IP}/parar`)
    const text = await response.text()
    res.send({ status: "ok", message: text })
  } catch (err) {
    console.error(err)
    res.status(500).send({ status: "error", message: "Falha ao conectar ao ESP8266" })
  }
});

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor Node rodando na porta ${PORT}`));
