const path = require('path')
const router = require('../routes/expense-routes')
const expenseBench = require('../models/expense-model')

exports.expenseController = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'Expense.html'))
}



exports.PostExpense = async (req, res, next) => {
    try {
        const { ExpenseAmount, Description, Category } = req.body
        const data = await expenseBench.create({ ExpenseAmount: ExpenseAmount, Description: Description, Category: Category })
        res.status(201).json({ data: data })
    } catch (err) {
        res.status(500).json({ error: err })
    }

}

exports.getExpense = async (req, res, next) => {
    try {
        const info = await expenseBench.findAll()
        res.status(200).json({ info: info })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}



exports.deleteExpense = async (req, res, next) => {
    try {
        if (!req.params.id) {
            console.log("ID is missing")
            res.status(400).json({ err: 'ID is missing' })
        }

        const ExpenseID = req.params.id
        await expenseBench.destroy({ where: { id: ExpenseID } })
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


exports.editExpense = (req, res, next) => {

    const { ExpenseAmount, Description, Category, ID } = req.body
    expenseBench.findAll({ where: { id: ID } }).then((result) => {
        expenseBench.update({ ExpenseAmount: ExpenseAmount, Description: Description, Category: Category }, { where: { id: ID } })
            .then(() => {
                const infoE = {
                     ExpenseAmount,
                     Description,
                     Category,
                     ID
                }

                res.json({data:infoE})
            })
    })


}
