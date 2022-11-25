import { Sequelize, QueryInterface, DataTypes } from 'sequelize';

module.exports = {
    up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.createTable('pacientes', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING,
                comment: "este campo armazena o nome do paciente",
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            idade: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        });
    },
    down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.dropTable('pacientes');
    }
}