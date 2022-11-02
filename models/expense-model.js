const path = require ('path')
const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const expenseTable = sequelize.define("Expensetable" ,{
    id : {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    ExpenseAmount : {
        type:Sequelize.INTEGER,
        allowNull:false,

    },
    Description : {
        type:Sequelize.STRING,
        allowNull:false,
    },

    Category : {
        type:Sequelize.STRING,
        allowNull:false,
    },

})

module.exports = expenseTable
