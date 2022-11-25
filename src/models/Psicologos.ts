import { DataTypes } from 'sequelize';
import db from "../database";

export const Psicologo = db.define('Psicologo', {
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
}, {
    modelName: 'Psicologo',
    tableName: 'psicologos',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});