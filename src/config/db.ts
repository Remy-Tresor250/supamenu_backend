const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'supamenu_db',
    'postgres',
    'remy1234'
    , {
        host: 'localhost',
        dialect: 'postgres',
        logging: true,
    })

module.exports = sequelize
