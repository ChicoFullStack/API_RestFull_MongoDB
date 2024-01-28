// config inicial
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();



// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get("/", (req, res) => {
  // mostrar req
  res.json({ message: "Oi Express Teste!" });
});

// mongodb+srv://fcdaoo:f92032832F?@cluster0.unt1kbm.mongodb.net/

// entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.unt1kbm.mongodb.net/`
  )
  .then(() => {
    console.log("Conectamos ao MongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
