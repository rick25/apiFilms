const express = require("express");
require("dotenv").config(); // valores del .env

const app = express();
require("./bd");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

// escuchador
app.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto ${PORT}`);
});
