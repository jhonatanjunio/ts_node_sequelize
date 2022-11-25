// import { Sequelize } from 'sequelize-typescript'
import { Sequelize, Dialect, Options } from 'sequelize'
import path from 'path';

const DB_NAME: string = process.env.DB_NAME as string;
const DB_USER: string = process.env.DB_USER as string;
const DB_PASS: string = process.env.DB_PASS as string;
const DB_DIALECT: Dialect = process.env.DB_DIALECT as Dialect;
const DB_HOST: string = process.env.DB_HOST as string;
const DB_PORT: number = Number(process.env.DB_PORT);
const DB_CONFIG: Options = {
    dialect: DB_DIALECT,
    host: DB_HOST,
    port: DB_PORT
}

const db: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

export default db;