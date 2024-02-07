const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Acer NITRO',
  host: 'localhost',
  database: 'api',
  password: 'ynwa1892',
  port: 5432,
})
const nodemailer = require("nodemailer");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const upNutrition = (req, res) => {
  const calories=Math.round(req.body.calories)
  const food=req.body.food
  const quantity=req.body.quantity
  const energy=req.body.energy
  const total=(quantity*energy)/100
  const id=req.body.id
  const date=req.body.date
  pool.query('SELECT nutrition_diary FROM diary WHERE users_id=$1 AND date=$2', [id, date], (error,results)=>{
    if(error){
      throw error
    }
    let oldDiary=results.rows[0].nutrition_diary
    if(oldDiary===null){
      oldDiary=" "
    }
    const str3=oldDiary.concat("\n", food, " ", quantity, "g ", total, "kcal")
    pool.query('UPDATE diary SET nutrition_diary=$1, calories=$2 WHERE users_id=$3 AND date=$4',[str3, calories, id, date], (error, results)=> {
      if(error){
        throw error
      }
      pool.query('SELECT nutrition_diary FROM diary WHERE users_id=$1 AND date=$2', [id, date], (error,results)=>{
        if(error){
          throw error
        }
        res.send({
          "nutritionDiary":results.rows[0].nutrition_diary,
          "calories":results.rows[0].calories
        })
      })
    })
  })

}
const upTraining = (req, res) => {
  const id=req.body.id
  const date=req.body.date
  const exercise=req.body.exercise
  const sets=req.body.sets
  const reps=req.body.reps
  pool.query('SELECT training_diary FROM diary WHERE users_id=$1 AND date=$2', [id, date], (error,results)=>{
    if(error){
      throw error
    }
    let oldDiary=results.rows[0].training_diary
    if(oldDiary===null){
      oldDiary=" "
    }
    const str3=oldDiary.concat("\n", exercise, " ", sets, "sets x", reps, "reps")
    pool.query('UPDATE diary SET training_diary=$1 WHERE users_id=$2 AND date=$3',[str3, id, date], (error, results)=> {
      if(error){
        throw error
      }
      pool.query('SELECT training_diary FROM diary WHERE users_id=$1 AND date=$2', [id, date], (error,results)=>{
        if(error){
          throw error
        }
        res.send({
          "trainingDiary":results.rows[0].training_diary
                })
      })
    })
  })
}
const upWeight = (req,res) => {
  const id=req.body.id
  const date=req.body.date
  const weight=req.body.weight
  pool.query('UPDATE diary SET weight_diary=$1 WHERE users_id=$2 AND date=$3',[weight, id, date], (error, results)=>{
    if(error){
      throw error
    }
    pool.query('SELECT weight_diary FROM diary WHERE users_id=$1 AND date=$2', [id, date], (error,results)=>{
      if(error){
        throw error
      }
    res.send(
      {
        "weight":results.rows[0].weight_diary
      }
    )
    })

  })
}

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  pool.query('SELECT * FROM users WHERE name = $1 ', [email], async function (error, results) {
    if (error) {
      res.send({
        "code": 400,
        "failed": "error ocurred",
        "error": error
      })

    } else {
      if (results.rows.length > 0) {
        if (password === results.rows[0].password) {
          res.send({
            "code": 200,
            "success": "login sucessfull",
            "url": "/profile",
            "user": results.rows[0].id
          })
        }
        else {
          res.send({
            "code": 204,
            "message": "Email and password does not match"
          })
        }
      }
      else {
        res.send({
          "code": 206,
          "message": "Email does not exits"
        });
      }
    }
  });
}
const showProfile = (req, res) => {
  const id = req.query.id
  pool.query('SELECT height, weight, goal, age, physical_activity, gender FROM users WHERE id=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    console.log(id)
    res.send(
      {
        "id": id,
        "results": results
      }
    )
  })
}

const generateReport = (req, res) =>{
  const id=req.query.id;
  const fromDate=req.query.fromDate;
  const toDate=req.query.toDate;
  pool.query('SELECT weight_diary, date FROM diary WHERE users_id=$1 AND date BETWEEN $2 AND $3',[id, fromDate, toDate], (error, results)=>{
    if(error){
      throw error
    }
    if(results.rows.length>0){
      console.log(results)
      res.send(
        {
          "results":results.rows
        }
      )
    }
  })
}

const getRecipes = (req, res) => {
  const id = req.query.id
  pool.query('SELECT * FROM recipes WHERE users_id=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    if (results) {
      res.send(
        {
          "results": results
        }
      )
    }
    else {
      res.send({ "error": "nothing found" })
    }
  })
}
const createRecipe = (req, res) => {
  const id = req.body.id
  const recipe = req.body.recipe
  const title = req.body.title
  pool.query('INSERT into recipes (title, content, users_id) values ($1, $2, $3)', [title, recipe, id], (error, results) => {
    if (error) {
      throw error
    }
    if (results) {
      res.send({ "message": "ok" })
    }
  })
}
const getDiary = (req, res) => {
  const id=req.query.id
  const date=req.query.date
  pool.query('SELECT * FROM diary WHERE users_id=$1 and date=$2',[id, date], (error,results) => {
    if(error){
      throw error
    }
    if(results.rows.length===0){
      pool.query('INSERT INTO diary (calories, nutrition_diary, training_diary, weight_diary, users_id, date) values (0,NULL,NULL,NULL,$1,$2)', [id, date], (error, results)=>{
      if(error){
        throw error
      }
      pool.query('SELECT * FROM diary WHERE users_id=$1 and date=$2',[id, date], (error, results) => {
        if(error){
          throw error
        }
        res.send(
          {
            "results": results
          }
        )
      })

      })
    }
    else{
      res.send(
        {
          "results": results
        }
      )
    }
  })
}
const generateDiet = (req, res) => {
  const calories=req.query.calories
  const minBudget=req.query.budget[0]
  const maxBudget=req.query.budget[1]
  const allergens=JSON.parse(req.query.allergens)
  const gluten=allergens.gluten
  const crustacean=allergens.crustacean
  const milk=allergens.milk
  const eggs=allergens.eggs
  const fish=allergens.fish
  const nuts=allergens.nuts
  const soybeans=allergens.soybeans
  const sulphite=allergens.sulphite
  
 pool.query(
   'SELECT * FROM diets WHERE calories<=$1 AND budget >=$2 AND budget<=$3 AND gluten!=$4 AND crustacean!=$5 AND milk!=$6 AND eggs!=$7 AND fish!=$8 AND nuts!=$9 AND soybeans!=$10 AND sulphite!=$11',
  [calories, minBudget, maxBudget, gluten, crustacean, milk, eggs, fish, nuts, soybeans, sulphite],
  (error, results)=>{
    if(error)
    {
      throw error
    }
    res.send({
      "results": results
    })
  }
  )

}
const generateSplit = (req, res) => {
  const times = req.body.times
  const focus = req.body.focus
  switch (times) {
    case 1:
      pool.query('SELECT * FROM splits WHERE id=1', (error, results) => {
        if (error) {
          throw error
        }
        res.send({
          "split": results.rows[0].content
        })
      })
      break;
    case 2:
      pool.query('SELECT * FROM splits WHERE id=2', (error, results) => {
        if (error) {
          throw error
        }
        res.send({
          "split": results.rows[0].content
        })
      })
      break;
    case 3:
      pool.query('SELECT * FROM splits WHERE id=3', (error, results) => {
        if (error) {
          throw error
        }
        res.send({
          "split": results.rows[0].content
        })
      })
      break;
    case 4:
      switch (focus) {
        case 'legsAbs':
          pool.query('SELECT * FROM splits WHERE id=4', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'arms':
          pool.query('SELECT * FROM splits WHERE id=5', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'back':
          pool.query('SELECT * FROM splits WHERE id=6', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'chest':
          pool.query('SELECT * FROM splits WHERE id=7', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'shoulders':
          pool.query('SELECT * FROM splits WHERE id=8', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        default:
          return 'Undefined'
      }
    break;
    case 5:
      switch (focus) {
        case 'legsAbs':
          pool.query('SELECT * FROM splits WHERE id=9', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'arms':
          pool.query('SELECT * FROM splits WHERE id=10', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'back':
          pool.query('SELECT * FROM splits WHERE id=11', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'chest':
          pool.query('SELECT * FROM splits WHERE id=12', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'shoulders':
          pool.query('SELECT * FROM splits WHERE id=13', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        default:
          return 'Undefined'
      }
    break;
    case 6:
      switch (focus) {
        case 'legsAbs':
          pool.query('SELECT * FROM splits WHERE id=14', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'arms':
          pool.query('SELECT * FROM splits WHERE id=15', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'back':
          pool.query('SELECT * FROM splits WHERE id=16', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'chest':
          pool.query('SELECT * FROM splits WHERE id=17', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'shoulders':
          pool.query('SELECT * FROM splits WHERE id=18', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        default:
          return 'Undefined'
      }
    break;
    case 7:
      switch (focus) {
        case 'legsAbs':
          pool.query('SELECT * FROM splits WHERE id=19', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'arms':
          pool.query('SELECT * FROM splits WHERE id=20', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'back':
          pool.query('SELECT * FROM splits WHERE id=21', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'chest':
          pool.query('SELECT * FROM splits WHERE id=22', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        case 'shoulders':
          pool.query('SELECT * FROM splits WHERE id=23', (error, results) => {
            if (error) {
              throw error
            }
            res.send({
              "split": results.rows[0].content
            })
          })
          break;
        default:
          return 'Undefined'
      }
    break;
    default:
      return 'Undefined'
  }
}


const updateWeight = (req, res) => {
  const weight = req.body.newWeight;
  const id = req.body.id
  pool.query(
    'UPDATE users SET weight = $1 WHERE id = $2',
    [weight, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with ID: ${id}`)
    }
  )
}
const updateGoal = (req, res) => {
  const goal = req.body.newGoal;
  const id = req.body.id
  pool.query(
    'UPDATE users SET goal = $1 WHERE id = $2',
    [goal, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const createUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const age = req.body.age;
  const weight = req.body.weight;
  const height = req.body.height;
  const gender = req.body.gender;
  const goal = req.body.goal;
  const activity = req.body.activity;
  pool.query('SELECT * FROM users WHERE name  =$1', [email], (error, results) => {
    if (error) {
      throw error
    }
    if (results.rows.length === 0) {
      pool.query('INSERT INTO users (name, password, age, weight, height, gender, goal, physical_activity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [email, password, age, weight, height, gender, goal, activity], (error, results) => {
        if (error) {
          throw error
        }
        console.log(results)
        pool.query('SELECT * FROM users WHERE name  =$1', [email], (error, results) => {
          res.send(
            {
              "code": 200,
              "message": "registered",
              "url": "/profile",
              "user": results.rows[0].id
            }
          )
        })

      })
    }
    else {
      res.send(
        {
          "code": 204,
          "message": "There is already a profile with this email"
        }
      )
    }
  })


}

module.exports = {
  getUsers,
  createUser,
  showProfile,
  getRecipes,
  getDiary,
  createRecipe,
  getRecipes,
  updateGoal,
  updateWeight,
  generateSplit,
  generateDiet,
  generateReport,
  upWeight,
  upNutrition,
  upTraining,
  login
}