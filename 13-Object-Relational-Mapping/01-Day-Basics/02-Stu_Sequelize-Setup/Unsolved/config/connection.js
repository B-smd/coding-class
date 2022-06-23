const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
  'library_db',
  'root',
  'myPassword',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);
async function connect(){

  return await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "library_db",
  });
}

module.exports = sequelize;
