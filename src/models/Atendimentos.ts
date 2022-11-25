import { DataTypes } from 'sequelize';
import db from "../database";

export const Atendimento = db.define('Atendimento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
    },
    observacao: {
        type: DataTypes.STRING,
    },
    psicologos_id: {
        type: DataTypes.INTEGER,

    },
    pacientes_id: {
        type: DataTypes.INTEGER,

    },
}, {
    modelName: 'Atendimento',
    tableName: 'atendimentos',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});