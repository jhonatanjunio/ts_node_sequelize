import db from "../database";
import { DataTypes, Model } from "sequelize";

export default class Pacientes extends Model { }
Pacientes.init({
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
    idade: {
        type: DataTypes.DATE,
    },
}, {
    modelName: 'pacientes',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: db
})
