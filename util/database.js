const Sequelize = require('sequelize')
const sequelize = new Sequelize("node-complete","root","MYSQL100",{
    dialect:"mysql",
    host:"localhost"
})

module.exports = sequelize