import { Sequelize, QueryInterface, DataTypes } from 'sequelize';

module.exports = {
    up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.changeColumn('pacientes', 'email', {
            type: DataTypes.STRING,
            allowNull: true
        });
    },
    down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.changeColumn('pacientes', 'email', {
            type: DataTypes.STRING,
            allowNull: false
        });
    }
}