import { Options, Sequelize } from 'sequelize'

const DB_NAME:string = process.env.DB_NAME as string;
const DB_USER:string = process.env.DB_USER as string;
const DB_PASS:string = process.env.DB_PASS as string;
const DB_CONFIG: Options = {
    dialect: "mysql",
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT)
}

const db: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

export default db;