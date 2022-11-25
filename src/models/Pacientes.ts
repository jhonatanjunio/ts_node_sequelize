import { DataTypes } from 'sequelize';
import db from "../database";

export type TPaciente = {
    nome: string;
    email: string;
    idade: number
};

export const Paciente = db.define('Paciente', {
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
        type: DataTypes.INTEGER,
    },
}, {
    modelName: 'Paciente',
    tableName: 'pacientes',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});