const express = require('express')
const path = require('path')
const db = require('./util/database')
const table = require('./models/expense-model')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const expenseRoutes = require('./routes/expense-routes')


app.use(express.static(path.join(__dirname, 'public')))

app.use(expenseRoutes)


db.sync().then(() => {
    app.listen(4545, () => {
        console.log('tracker is running...')
    });
});


