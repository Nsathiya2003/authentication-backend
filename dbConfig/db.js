import { Sequelize, DataTypes } from 'sequelize';

const ConnectDB = new Sequelize('userdetails', 'root', 'Sathiya@2003', {
  host: 'localhost',
  dialect: 'mysql',
}); 
// Test the database connection
ConnectDB.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));

export default ConnectDB; 