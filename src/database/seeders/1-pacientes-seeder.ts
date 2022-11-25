import { Sequelize, QueryInterface, DataTypes } from 'sequelize';
import { readFile  } from 'xlsx';

import path from 'path';
import xlsx from 'xlsx';

module.exports = {
    up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {

        const pacientesXlsx = readFile(path.resolve('pacientes.xlsx'));
        const xlsxToJson: object[] = xlsx.utils.sheet_to_json(pacientesXlsx.Sheets[pacientesXlsx.SheetNames[0]]);
        
        return queryInterface.bulkInsert('pacientes', xlsxToJson);
    },
    down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.bulkDelete('pacientes', {}, {});
    }
};