const usuarioModelo = require("../Model/Usuario");

const registrarUsuario = async(req,res) => 
{
    try 
    {
        const {nombreUsuario,contraseña,email,direccion,telefono} = req.body;

         //CREO EL USUARIO EN LA BASE DE DATOS
         const usuarioRegistrado = await usuarioModelo.create
         ({
         nombreUsuario,
         contraseña,
         email,
         direccion,
         telefono,
         });

        if (usuarioRegistrado) 
        {
        return res.status(201).json
        ({
        status: true,
        message: "Usuario registrado exitosamente",
        usuario: usuarioRegistrado.toJSON(),
        });
        } 
        else 
        {
        return res.status(404).json({ status: false, error: "Error al registrar el usuario" });
    }
    } 
    catch (error) 
    {
        console.error(error);
        return res.status(500).json({ error: "Error interno del servidor", status: false });
    }
}

// CONTROLLADOR OBTENER INFORMACIÓN DE UN USUARIO POR ID
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;

    // VALIDACION SI EXISTE EL ID ES POSITIVO
    if (!Number.isInteger(parseInt(id)) || parseInt(id) <= 0) {
      return res.status(400).json({
        status: false,
        error: "ID de usuario inválido",
      });
    }

    // BUSCA EL USUARIO SI EXSITE
    const usuario = await usuarioModelo.findByPk(id);

    // VEREFICA SI EXISTE
    if (!usuario) {
      return res.status(404).json({
        status: false,
        error: "Usuario no encontrado",
      });
    }

    return res.status(200).json({
      status: true,
      usuario: {
        idUsuario: usuario.idUsuario,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        Rol_idRol: usuario.Rol_idRol,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: "Error interno del servidor",
    });
  }
};

module.exports = { registrarUsuario, obtenerUsuarioPorId };
