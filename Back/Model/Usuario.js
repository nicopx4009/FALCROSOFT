const { DataTypes } = require("sequelize");
const sequelize = require("./Conexion");


const Usuario = sequelize.define(
    "Usuario",
    {
        idUsuario:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreUsuario:
        {
            type: DataTypes.STRING,
        },
        contraseña:
        {
            type: DataTypes.STRING,
        },
        email:
        {
            type: DataTypes.STRING,
        },
        direccion:
        {
            type: DataTypes.STRING,
        },
        telefono:
        {
            type: DataTypes.STRING,
        }
    },
    {
    tableName: "usuario",
    timestamps: false,
    }
)

module.exports = Usuario;