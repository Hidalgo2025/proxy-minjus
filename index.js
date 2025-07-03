const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// URL del Apps Script
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxWbutc0Ipqhq1OSbuQQIVzKwbEQPIkVyuzA8ItOOC352D1sK_KDtv0deANQeH4_tyLSw/exec";

app.use(cors());
app.use(express.json());

app.post('/registrar', async (req, res) => {
  try {
    const response = await axios.post(APPS_SCRIPT_URL, req.body, {
      headers: { 'Content-Type': 'application/json' }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error al comunicar con Apps Script:', error.message);
    res.status(500).json({ mensaje: "Error al conectar con el servidor de Google Apps Script." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy escuchando en puerto ${PORT}`);
});