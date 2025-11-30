const express = require("express");
const app = express();

const db = require("./db/conection");
const carRoutes = require("./routes/carRoutes");

const PORT = 3005;

app.use(express.json());

// rota principal
app.use("/carros", carRoutes);

// db

db.authenticate()
.then(() => {
    console.log("Banco de dados conectado.");

    return db.sync();
})
.then(() => {
    console.log("Tabelas do banco de dados sincronizadas.");

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`)
    });
});


