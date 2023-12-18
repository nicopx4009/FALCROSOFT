const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("../Back/Model/Conexion");
require("dotenv/config.js");
// CONEXION MIDDLEWARE
app.use(cors());
app.use(express.json());

// RECIBIR BODY DE LOS FORMULARIOS
app.use(express.urlencoded({ extended: true }));

//IMPORTO LOS MODELOS
const Usuario = require("../Back/Model/Usuario");
const Calendario = require("../Back/Model/Calendario");
const Eventos = require("../Back/Model/Eventos");
//ASOCIADOS CON EL MODELO
Usuario.sync({ logging: false }).then(async () => {
  Usuario.sync({ logging: false });
});
Calendario.sync({ logging: false }).then(() => {
  Eventos.sync({ logging: false });
});

//GENERO LAS RUTAS PARA EL MODELO MVC
const rutaCalendario = require("../Back/routes/calendario");
const rutaUsuario = require("../Back/routes/usuario");
const rutaEventos = require("../Back/routes/eventos");

app.use("/calendario", rutaCalendario);
app.use("/usuario", rutaUsuario);
app.use("/eventos", rutaEventos);

const conexion = async () => {
  try {
    await sequelize.authenticate();
    app.listen(process.env.PUERTO, () => {
      console.log(
        `Aplicacion Ejecutandose en: http://localhost:${process.env.PUERTO}`
      );
    });

    console.log("Conexión a la base de datos establecida correctamente");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

conexion();
