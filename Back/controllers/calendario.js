const calendarioModelo = require("../Model/Calendario");

const agregarFechaCalendario = async (req, res) => 
{
    try 
    {
        const 
        {
            fechaCalendario,
            descripcion,
            valor,
            fechaModificacion,
            UsuarioIdUsuario,
        } = req.body;

        console.log(UsuarioIdUsuario);

    const nuevaFechaCalendario = await calendarioModelo.create({
      fechaCalendario,
      descripcion,
      valor,
      fechaModificacion,
      Usuario_idUsuario: UsuarioIdUsuario,
    });
    if (nuevaFechaCalendario) {
      return res.status(200).json({
        mensaje: "fecha agregada exitosamente",
        status: true,
        producto: nuevaFechaCalendario,
      });
    } else {
      return res.status(404).json({
        mensaje: "Error al agregar la fecha",
        status: false,
      });
    }
    }
    catch (error) {
       console.error(error);
       return res.status(500).json({
       mensaje: "Error al agregar la fecha",
       status: false,
       error: error.message,
    }); 
    }
  }
// OBTENER TODAS LAS FECHAS
const obtenerFechasCalendario = async (req, res) => {
  try {
    const fechas = await calendarioModelo.findAll();

    if (!fechas) {
      return res.status(404).json({
        mensaje: "fechas no encontradas",
        status: false,
      });
    }

    return res.status(200).json({
      mensaje: "fechas obtenidas exitosamente",
      status: true,
      fechas: fechas,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mensaje: "Error al obtener las fechas",
      status: false,
      error: error.message,
    });
  }
};

// OBTENER UNA FECHA POR ID
const obtenerFechaCalendarioPorId = async (req, res) => {
  try {
    const fecha = await calendarioModelo.findByPk(req.params.id, {});

    if (!fecha) {
      return res.status(404).json({
        mensaje: "Fecha no encontrada",
        status: false,
      });
    }

    return res.status(200).json({
      mensaje: "Fecha obtenida exitosamente",
      status: true,
      fecha: fecha,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mensaje: "Error al obtener la fecha",
      status: false,
      error: error.message,
    });
  }
};

// ACTUALIZAR UNA FECHA POR ID
const actualizarFechaCalendario = async (req, res) => {
  try {
    const fecha = await calendarioModelo.findByPk(req.params.id);

    if (!fecha) {
      return res.status(404).json({
        mensaje: "Fecha no encontrada",
        status: false,
      });
    }

    const {
      fechaCalendario,
      descripcion,
      valor,
      fechaModificacion,
      UsuarioIdUsuario,
    } = req.body;

    // Actualizar los campos del producto
    fecha.fechaCalendario = fechaCalendario;
    fecha.descripcion = descripcion;
    fecha.valor = valor;
    fecha.fechaModificacion = fechaModificacion;
    fecha.UsuarioIdUsuario = UsuarioIdUsuario;
    // Actualizar la imagen si se proporciona una nueva
   
    await fecha.save();

    res.status(200).json({
      mensaje: "Fecha actualizada exitosamente",
      status: true,
      fecha: fecha,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al actualizar la fecha",
      status: false,
      error: error.message,
    });
  }
};

// ELIMINAR UNA FECHA POR ID
const eliminarFechaCalendario = async (req, res) => {
  try {
    const fecha = await calendarioModelo.findByPk(req.params.id);

    if (!fecha) {
      return res.status(404).json({
        mensaje: "Fecha no encontrada",
        status: false,
      });
    }

    await fecha.destroy();

    return res.status(200).json({
      mensaje: "Fecha eliminada exitosamente",
      status: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mensaje: "Error al eliminar la fecha",
      status: false,
      error: error.message,
    });
  }
};



module.exports = {
  agregarFechaCalendario,
  obtenerFechasCalendario,
  obtenerFechaCalendarioPorId,
  actualizarFechaCalendario,
  eliminarFechaCalendario,
};