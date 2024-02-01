const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middleware/errorHandler");

const autenticacion = auth({
  audience: "https://api.example.com/apiproducto",
  issuerBaseURL: "https://dev-p4rvxztwgshkhxra.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

app.use("/libros", autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
