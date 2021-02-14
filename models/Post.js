const { Sequelize, Model, DataTypes } = require('sequelize');

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = require('../helpers/data');

const sequelize = new Sequelize({
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'Default Post'
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: false,
        defaultValue: 'Default description'
    }
}, { 
    sequelize, 
    modelName: 'post',
    tableName: 'post'
});

(async () => {
    await sequelize.sync({ alter: true });
  })();

module.exports = Post;