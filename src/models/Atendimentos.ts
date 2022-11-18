import db from "../database";
import { DataTypes } from "sequelize";

const Atendimentos = db.define(
    "Atendimentos", 
    {   
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
},
{
    tableName: "atendimentos",
    timestamps: false,

})

export default Atendimentos;