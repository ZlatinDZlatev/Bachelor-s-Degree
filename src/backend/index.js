const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const cors = require('cors')
const db = require('./queries')
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Acer NITRO',
  host: 'localhost',
  database: 'api',
  password: 'ynwa1892',
  port: 5432,
})

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/',  (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
})
app.post('/login', db.login)
app.post('/register', db.createUser)
app.get('/profile', db.showProfile)
app.get('/recipes', db.getRecipes)
app.get('/diary', db.getDiary)
app.post('/upnutrition', db.upNutrition)
app.post('/uptraining', db.upTraining)
app.post('/recipes', db.createRecipe)
app.post('/upweight', db.updateWeight)
app.post('/upgoal', db.updateGoal)
app.post('/splits', db.generateSplit)
app.post('/upweightdiary',db.upWeight)
app.get('/diets', db.generateDiet)
app.get('/reports', db.generateReport)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })