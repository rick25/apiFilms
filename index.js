const express = require("express");
const apiRouter = require("./routes/api");
require("dotenv").config(); // valores del .env

const app = express();
require("./bd");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use("/api", apiRouter);

// escuchador
app.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto ${PORT}`);
});
