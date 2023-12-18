const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario");


router.post("/registrar",usuarioController.registrarUsuario);
router.get("/obtener/:id",usuarioController.obtenerUsuarioPorId);

module.exports = router;