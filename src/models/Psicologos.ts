import db from "../database";
import { DataTypes } from "sequelize";

const Psicologos = db.define(
    "Psicologos", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },    
    senha: {
        type: DataTypes.STRING,
    },
    apresentacao: {
        type: DataTypes.STRING,
    },
},
{
    tableName: "psicologos",
    timestamps: false,
})

export default Psicologos;