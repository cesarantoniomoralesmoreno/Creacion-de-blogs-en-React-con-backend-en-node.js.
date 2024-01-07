import { Sequelize } from "sequelize";

const db = new Sequelize('database','root','root',{
host: 'localhost',
dialect:'mysql'
});

export default db;