const express = require('express')
const path = require('path')

const routes = express.Router()
const expenseController = require('../controllers/expense-controller')

routes.get('/add-expense',expenseController.expenseController)

routes.post('/add-expense',expenseController.PostExpense)

routes.get('/get-expense',expenseController.getExpense)

routes.delete('/delete/:id',expenseController.deleteExpense)

routes.post('/expense/edit',expenseController.editExpense)

module.exports = routes
