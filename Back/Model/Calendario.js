const { DataTypes } = require("sequelize");
const sequelize = require("./Conexion");
const Usuario = require("./Usuario")

const Calendario = sequelize.define(
    "Calendario",
    {
        idCalendario:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fechaCalendario:
        {
            type: DataTypes.DATE,
        },
        descripcion:
        {
            type: DataTypes.STRING,
        },
        valor:
        {
            type: DataTypes.DECIMAL(10, 0),
        },
        fechaModificacion:
        {
            type: DataTypes.DATE,
        },
    },
    {
        tableName : "calendario",
        timestamps: false,
    }
);

Calendario.belongsTo(Usuario, { foreignKey: "Usuario_idUsuario" });
Usuario.hasMany(Calendario, { foreignKey: "Usuario_idUsuario" });

module.exports = Calendario;