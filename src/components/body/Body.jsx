import React, { useState } from 'react';
import {Line} from 'react-chartjs-2';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import NewTextField from '../pages/NewTextField'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
import axios from "axios"
import WhiteButton from '../pages/WhiteButton';
import WhiteLabel from '../pages/WhiteMainLabel';
import WhiteControlLabel from '../pages/WhiteLabel'
import CustSlider from '../pages/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import WhiteCombo from '../pages/WhiteCombo';
import BWRadio from '..//pages/BWRadio';
import { TextField, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import { AddCircleOutline, Save } from '@material-ui/icons';
import WhiteMainLabel from '../pages/WhiteMainLabel';
import WhiteCheckbox from '../pages/WhiteCheckBox';





const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={classes.transparent}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    width: "100%",
    bottom: 0,
    left: 0
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    opacity: "0.7"
  },
  columnradio: {
    display: "flex",
    flexDirection: "column"
  },
  secondLabel: {
    paddingLeft: "400px",
    paddingBottom: "25px"
  },
  tb: {
    paddingLeft: "350px",
    paddingBottom: "10px"
  },
  p: {
    color: "white",
    fontSize: "0.8rem",
    paddingBottom: "20px"
  },
  diarybuttons: {
    paddingBottom: "5%"
  },
  input: {
    color: "white"
  },
  button: {
    paddingLeft: "250px",
    paddingTop: "48px"
  },
  repbutton: {
    paddingLeft: "250px",
    paddingTop: "30px"
  },
  buttons: {
    paddingLeft: "350px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
  buttonwidth: {
    width: "120%"
  },
  tabs: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#d0d2e5",
    color: "#212d87"
  },
  label: {
    paddingLeft: "300px",
    paddingBottom: "40px"
  },
  diarylabels: {
    marginLeft: "20%"
  },
  diarycontent1: {
    marginLeft: "16%",
    paddingTop: "0,45%"

  },
  diarycontent2: {
    marginLeft: "13%",
    paddingTop: "0,5%"

  },
  diarycontent3: {
    marginLeft: "13%",
    paddingTop: "2%"
  },
  recipelabels: {
    paddingLeft: "400px"
  },
  addbutton: {
    paddingLeft: "370px"
  },
  savebutton: {
    paddingLeft: "20px"
  },
  homelabel: {
    paddingBottom: "40px"
  },
  betweenlabels:
  {
    paddingLeft: "20px"
  },
  slider: {
    paddingLeft: "250px",
    paddingBottom: "40px"
  },
  reports: {
    paddingLeft: "250px",
    paddingBottom: "20px"
  },
  history: {
    display: "flex",
    flexDirection: "column",
  },
  transparent: {
    backgroundColor: "black",
    opacity: "0.7"
  }

}));

const ProfileTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [times, setTimes] = useState(1);
  const [focus, setFocus] = useState('arms');
  const [recipe, setRecipe] = useState('')
  const [title, setTitle] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [addButtonClicked, setAddButtonClicked] = useState(false)
  const [updateWeight, setUpdateWeight] = useState(false)
  const [updateGoal, setUpdateGoal] = useState(false)
  const [labels, setLabels]=useState([])
  const [openDiagram, setOpenDiagram]=useState(true)
  const [reportdata, setReportdata]=useState([])
  const [flag, setFlag]=useState(false)
  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Weight',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgb(255,0,0)',
        borderColor: 'rgb(255,0,0)',
        borderWidth: 2,
        data: reportdata
      }
    ]
  }
  const [report, setReport] = useState('weightreport')
  const [budget, setBudget] = useState([15, 100])
  const [weight, setWeight] = useState(0)
  const [exercise, setExercise] = useState('Еxercise')
  const [sets, setSets] = useState(0)
  const [reps, setReps] = useState(0)
  
  const [addWeight, setAddWeight] = useState(0)
  const [goal, setGoal] = useState(0)
  const [split, setSplit] = useState('')
  const [food, setFood] = useState('food')
  const [quantity, setQuantity] = useState(0)
  const [energy, setEnergy] = useState(0)
  const [calories, setCalories] = useState(0)
  const [nutritionDiary, setNutritionDiary] = useState('')
  const [trainingDiary, setTrainingDiary] = useState('')
  const [weightDiary, setWeightDiary] = useState(0)
  const [checkBoxes, setCheckBoxes] = useState({
    gluten: false,
    crustacean: false,
    milk: false,
    eggs: false,
    fish: false,
    nuts: false,
    soybeans: false,
    sulphite: false
  });
  const { gluten, crustacean, milk, eggs, fish, nuts, soybeans, sulphite } = checkBoxes
  const [newWeight, setNewWeight] = useState(30)
  const [newGoal, setNewGoal] = useState(30)
  const [height, setHeight] = useState(0)
  const [gender, setGender] = useState('male')
  const [age, setAge] = useState(0)
  const today = new Date()
  const todaydate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const [date, setDate] = useState(todaydate)
  const [activity, setActivity] = useState('low')
  const [bmr, setBmr] = useState(0)
  const [startDate, setStartDate] = useState()
  const [toDate, setToDate] = useState()
  const [open, setOpen] = React.useState(false);
  const [openSplit, setOpenSplit] = React.useState(false);
  const [openRecipe, setOpenRecipe] = React.useState(false);
  const [recipes, setRecipes] = React.useState([{ "title": '', "content": '' }])
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null)

  const date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
  const date2 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 2);
  const date3 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 3);
  const date4 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 4);
  React.useEffect(() => {
    axios('http://localhost:4000/profile', { params: { id: localStorage.getItem('user') } })
      .then(response => {
        setWeight(response.data.results.rows[0].weight)
        setGoal(response.data.results.rows[0].goal)
        if (response.data.results.rows[0].gender === 'male') {
          setBmr(66 + (13.7 * response.data.results.rows[0].weight) + (5 * response.data.results.rows[0].height) - (6.8 * response.data.results.rows[0].age))
        }
        else {
          setBmr(655 + (9.6 * response.data.results.rows[0].weight) + (1.8 * height) - (4.7 * age))
        }
        switch (response.data.results.rows[0].physical_activity) {
          case 'verylow':
            setBmr(prev => prev);
            break;
          case 'low':
            setBmr(prev => prev * 1.2)
            break;
          case 'medium':
            setBmr(prev => prev * 1.375)
            break;
          case 'high':
            setBmr(prev => prev * 1.55)
            break;
          case 'exHigh':
            setBmr(prev => prev * 1.725)
            break;
          default:
            return 'Unknown activity';
        }
        if (response.data.results.rows[0].goal < response.data.results.rows[0].weight) {
          setBmr(prev => 0.8 * prev)
        }
        else if (response.data.results.rows[0].goal > response.data.results.rows[0].weight) {
          setBmr(prev => 1.2 * prev)
        }
      }

      )
      .catch(err => console.log(err));
    axios('http://localhost:4000/recipes', { params: { id: localStorage.getItem('user') } })
      .then(response => {
        console.log(response)
        response.data.results.rows.map((row) => setRecipes(prevItems => [...prevItems, row]))
        console.log(recipes)
      })
      .catch(err => console.log(err))
    axios('http://localhost:4000/diary', { params: { id: localStorage.getItem('user'), date: date } })
      .then(response => {
        console.log(response)
        setCalories(response.data.results.rows[0].calories)
        if (response.data.results.rows[0].weight_diary !== null) {
          setWeightDiary(response.data.results.rows[0].weight_diary)
        }
        else {
          setWeightDiary("")
        }
        if (response.data.results.rows[0].training_diary !== null) {
          setTrainingDiary(response.data.results.rows[0].training_diary)
        }
        else {
          setTrainingDiary("")
        }
        if (response.data.results.rows[0].nutrition_diary !== null) {
          setNutritionDiary(response.data.results.rows[0].nutrition_diary)
        }
        else {
          setNutritionDiary("")
        }
      })
      .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    axios('http://localhost:4000/diary', { params: { id: localStorage.getItem('user'), date: date } })
      .then(response => {
        console.log(response)
        setCalories(response.data.results.rows[0].calories)
        if (response.data.results.rows[0].weight_diary !== null) {
          setWeightDiary(response.data.results.rows[0].weight_diary)
        }
        if (response.data.results.rows[0].training_diary !== null) {
          setTrainingDiary(response.data.results.rows[0].training_diary)
        }
        if (response.data.results.rows[0].nutrition_diary !== null) {
          setNutritionDiary(response.data.results.rows[0].nutrition_diary)
        }
      })
      .catch(err => console.log(err))
  }, [date])



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleExercise = (event) => {
    setExercise(event.target.value)
  }
  const handleSets = (event) => {
    setSets(event.target.value)
  }
  const handleReps = (event) => {
    setReps(event.target.value)
  }
  const handleAddWeight = (event) => {
    setAddWeight(event.target.value)
  }
  const handleClickOpenSplit = () => {
    setOpenSplit(true);
  };
  const handleClickOpenRecipe = (dataIndex) => {
    setSelectedRecipeIndex(dataIndex);
    console.log(recipes[dataIndex])
    setOpenRecipe(true);
  };
  const handleCloseSplit = () => {
    setOpenSplit(false);
  };
  const handleCloseRecipe = () => {
    setSelectedRecipeIndex(null)
    setOpenRecipe(false);
  };
  const handleFood = (event) => {
    setFood(event.target.value)
  }
  const handleQuantity = (event) => {
    setQuantity(event.target.value)
  }
  const handleEnergy = (event) => {
    setEnergy(event.target.value)
  }
  const onAddFood = () => {
    console.log(food)
    console.log(quantity)
    console.log(energy)
    setCalories(prev => prev + ((quantity * energy) / 100))
    axios.post('http://localhost:4000/upnutrition', { "id": localStorage.getItem('user'), "food": food, "quantity": quantity, "energy": energy, "calories": calories, "date": date })
      .then(response => {
        console.log(response)
        setNutritionDiary(response.data.nutritionDiary)
      })
      .catch(err => console.log(err))

  }
  const onAddExercise = () => {
    axios.post('http://localhost:4000/uptraining', { "id": localStorage.getItem('user'), "exercise": exercise, "sets": sets, "reps": reps, "date": date })
      .then(response => {
        console.log(response)
        setTrainingDiary(response.data.trainingDiary)
      })
      .catch(err => console.log(err))
  }
  const onAddWeight = () => {
    axios.post('http://localhost:4000/upweightdiary', { "id": localStorage.getItem('user'), "weight": addWeight, "date": date })
      .then(response => {
        console.log(response)
        setWeightDiary(response.data.weight)
      })
      .catch(err => console.log(err))
  }
  const generateSplit = () => {
    axios.post('http://localhost:4000/splits', { "times": times, "focus": focus })
      .then(response => {
        setSplit(response.data.split)
        setOpenSplit(true);
      })
      .catch(err => console.log(err))
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('split').value], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "split.txt";
    document.body.appendChild(element);
    element.click();
  }
  const handleCheckBox = (event) => {
    setCheckBoxes({ ...checkBoxes, [event.target.name]: event.target.checked });
  };
  const handleSubmitRecipe = () => {
    setRecipes([])
    axios.post('http://localhost:4000/recipes', { "id": localStorage.getItem('user'), "recipe": recipe, "title": title }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log(response)
        axios('http://localhost:4000/recipes', { params: { id: localStorage.getItem('user') } })
          .then(response => {
            console.log(response)
            response.data.results.rows.map((row) => setRecipes(prevItems => [...prevItems, row]))
            console.log(recipes)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))

    setOpen(false);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, formState: { errors }, setError } = useForm({ reValidateMode: 'onSubmit' });
  const handleUpdateWeight = () => {
    axios.post('http://localhost:4000/upweight', { "newWeight": newWeight, "id": localStorage.getItem('user') }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(window.location.reload(true))
      .catch(err => console.log(err))
  }
  const handleUpdateGoal = () => {
    axios.post('http://localhost:4000/upgoal', { "newGoal": newGoal, "id": localStorage.getItem('user') }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(window.location.reload(true))
      .catch(err => console.log(err))
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFocus = (event) => {
    setFocus(event.target.value)
    console.log(focus)
  }
  const handleReports = (event) => {
    setReport(event.target.value)
    console.log(report)
  }
  const handleTimes = (event, newValue) => {
    setTimes(newValue)
    console.log(times)
  }
  const handleSplit = (data) => {
    console.log(data)
  }
  const routerHistory = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    routerHistory.push('/login')
  }
  function valuetext(times) {
    return `${times}°C`;
  }

  const marks = [
    {
      value: 1,
      label: "1"
    },
    {
      value: 2,
      label: "2"
    },
    {
      value: 3,
      label: "3"
    },
    {
      value: 4,
      label: "4"
    },
    {
      value: 5,
      label: "5"
    },
    {
      value: 6,
      label: "6"
    },
    {
      value: 7,
      label: "7"
    }
  ]
  


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} className={classes.tabs} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Reports" {...a11yProps(1)} />
          <Tab label="Diary" {...a11yProps(2)} />
          <Tab label="My recipes" {...a11yProps(3)} />
          <Tab label="Generate new diet or split" {...a11yProps(4)} />
          <WhiteButton onClick={handleLogout}>Logout</WhiteButton>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.transparent}>
        <div className={classes.column} align="center">
          <div className={classes.homelabel}>
            <WhiteLabel>My current weight</WhiteLabel>
            <WhiteLabel style={{ paddingLeft: "30px" }}>{weight}</WhiteLabel>
            {updateWeight ?
              (<form onSubmit={handleSubmit(handleUpdateWeight)}>
                <NewTextField
                  label="New weight"
                  margin="normal"
                  variant="outlined"
                  type="number"
                  value={newWeight}
                  InputLabelProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    inputProps: {
                      max: 150, min: 30
                    },
                    className: classes.input
                  }}
                  {...register("newWeight",
                    {
                      required: "Please fill in the new weight",
                    })}
                  onChange={(event) => setNewWeight(event.target.value)}
                  error={!!errors.newWeight}
                  helperText={errors?.newWeight?.message}
                />
                <WhiteButton type="submit" onClick={handleUpdateWeight}>Save</WhiteButton>
              </form>)
              : (<WhiteButton onClick={() => { setUpdateWeight(true) }}>Update</WhiteButton>)}
          </div>
          <div className={classes.homelabel}>
            <WhiteLabel>Current split</WhiteLabel>
            <WhiteLabel style={{ paddingLeft: "30px" }}>Arms</WhiteLabel>
          </div>
          <div className={classes.homelabel}>
            <WhiteLabel>Goal</WhiteLabel>
            <WhiteLabel style={{ paddingLeft: "30px" }}>{goal}</WhiteLabel>
            {updateGoal ?
              (<form onSubmit={handleSubmit(handleUpdateGoal)}>
                <NewTextField
                  label="New goal"
                  margin="normal"
                  variant="outlined"
                  type="number"
                  value={newGoal}
                  InputLabelProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    inputProps: {
                      max: 150, min: 30
                    },
                    className: classes.input
                  }}
                  {...register("newGoal",
                    {
                      required: "Please fill in the new goal",
                    })}
                  onChange={(event) => setNewGoal(event.target.value)}
                  error={!!errors.newGoal}
                  helperText={errors?.newGoal?.message}
                />
                <WhiteButton type="submit" onClick={handleUpdateGoal}>Save</WhiteButton>
              </form>)
              : (<WhiteButton onClick={() => { setUpdateGoal(true) }}>Update</WhiteButton>)}
          </div>
          <div className={classes.homelabel}>
            <WhiteLabel>Calories daily</WhiteLabel>
            <WhiteLabel style={{ paddingLeft: "30px" }}>{Math.round(bmr)}</WhiteLabel>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.reports}>
          <WhiteLabel>Type of report</WhiteLabel>
          <RadioGroup aria-label="reports" name="reports1" value={report} onChange={handleReports}>
            <WhiteControlLabel value="weightreport" control={<BWRadio />} label="Weight report" />
            <WhiteControlLabel value="caloriesreport" control={<BWRadio />} label="Calories report" />
          </RadioGroup>
        </div>
        <div className={classes.row}>
        <div className={classes.reports}>
          <div>
            <WhiteLabel>
              Date from
            </WhiteLabel>
          </div>
          <NewTextField
            type="date"
            margin="normal"
            variant="outlined"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={classes.input}
            InputLabelProps={{
              className: classes.input
            }}
            InputProps={{
              className: classes.input
            }}
            error={!!errors.dateFrom}
            helperText={errors?.dateFrom?.message}
          />
        </div>
        <div className={classes.reports}>
          <div>
            <WhiteLabel>
              Date to
            </WhiteLabel>
          </div>
          <NewTextField
            type="date"
            margin="normal"
            variant="outlined"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputProps={{
              className: classes.input,
            }}
            error={!!errors.dateTo}
            helperText={errors?.dateTo?.message}
          />

        </div>
        <div style={{width:"500px", height:"300px"}}>
 <Line
          data={{
            labels: labels,
            datasets: [
              {
                data: reportdata,
                label: "Weight report",
                borderColor: "#3333ff",
                fill: true,
                backgroundColor: "#CAA6DB",
              },
            ],
          }}
        />
        </div>
        </div>
        <div className={classes.repbutton}>
          <WhiteButton onClick={() => {
            setReportdata([])
            setLabels([])
            axios('http://localhost:4000/reports',{params:{"fromDate":startDate, "toDate":toDate, "id":localStorage.getItem('user')}})
            .then(response=>{console.log(response)
            response.data.results.map((row)=>{
              setReportdata(prevItems=>[...prevItems, row.weight_diary])
              setLabels(prevItems=>[...prevItems, row.date])
             
            })
            }
            )
            }}>Generate report</WhiteButton>
        </div>
       
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.row}>
          <div className={classes.history}>
            <WhiteLabel style={{ marginBottom: "20%" }}>History</WhiteLabel>

          </div>
          <div style={{ marginLeft: "16%" }}>
            <WhiteLabel>Nutrition diary</WhiteLabel>
          </div>
          <div style={{ marginLeft: "22%" }}>
            <WhiteLabel>Traning diary</WhiteLabel>
          </div>
          <div style={{ marginLeft: "22%" }}>
            <WhiteLabel>Weight diary</WhiteLabel>
          </div>
        </div>
        <div className={classes.diarybuttons}>
          <div className={classes.row}>
            <div className={classes.columnradio}>
              <span onClick={() => setDate(date4)}><WhiteLabel style={{ marginBottom: "20%" }}>{date4}</WhiteLabel></span>
              <span onClick={() => setDate(date3)}><WhiteLabel style={{ marginBottom: "20%" }}>{date3}</WhiteLabel></span>
              <span onClick={() => setDate(date2)}><WhiteLabel style={{ marginBottom: "20%" }}>{date2}</WhiteLabel></span>
              <span onClick={() => setDate(date1)}><WhiteLabel style={{ marginBottom: "20%" }}>{date1}</WhiteLabel></span>
              <span onClick={() => setDate(todaydate)}><WhiteLabel style={{ marginBottom: "20%" }}>{todaydate}</WhiteLabel></span>
            </div>
            <div className={classes.diarycontent1}>
              <div className={classes.columnradio}>
                <textarea value={nutritionDiary} disabled style={{ color: "white", backgroundColor: "transparent", border: "none", fontSize: "14px", resize: "none" }} />
                <NewTextField
                  InputProps={{
                    className: classes.input,
                  }}
                  value={food}
                  onChange={handleFood}
                  label="Food"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.input
                  }}

                  InputProps={{
                    className: classes.input
                  }}
                  style={{ width: "35%" }}
                />
                <NewTextField
                  type="number"
                  value={quantity}
                  onChange={handleQuantity}
                  label="Gram"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.input
                  }}
                  InputProps={
                    {
                      inputProps: {
                        min: 0
                      },
                      className: classes.input
                    }}
                  style={{ width: "35%" }}
                />
                <NewTextField
                  type="number"
                  value={energy}
                  onChange={handleEnergy}
                  label="Calories per 100g"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.input
                  }}
                  InputProps={
                    {
                      inputProps: {
                        min: 0
                      },
                      className: classes.input
                    }}
                  style={{ width: "35%" }}
                />
                <WhiteLabel>Calories: {calories}</WhiteLabel>
              </div>
            </div>
            <div className={classes.diarycontent2}>
              <textarea value={trainingDiary} disabled style={{ color: "white", backgroundColor: "transparent", border: "none", fontSize: "14px", resize: "none" }} />
              <div className={classes.columnradio}>
                <NewTextField
                  InputProps={{
                    className: classes.input,
                  }}
                  value={exercise}
                  onChange={handleExercise}
                  label="Exercise"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.input
                  }}

                  InputProps={{
                    className: classes.input
                  }}
                  style={{ width: "35%" }}
                />
                <NewTextField
                  type="number"
                  value={sets}
                  onChange={handleSets}
                  label="Sets"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.input
                  }}
                  InputProps={
                    {
                      inputProps: {
                        min: 0
                      },
                      className: classes.input
                    }}
                  style={{ width: "35%" }}
                />
                <NewTextField
                  type="number"
                  value={reps}
                  onChange={handleReps}
                  label="Reps"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.input
                  }}
                  InputProps={
                    {
                      inputProps: {
                        min: 0
                      },
                      className: classes.input
                    }}
                  style={{ width: "35%" }}
                />
              </div>
            </div>
            <div className={classes.diarycontent3}>
              <div className={classes.columnradio}>
                <WhiteLabel>{weightDiary}</WhiteLabel>
                <NewTextField
                  type="number"
                  value={addWeight}
                  onChange={handleAddWeight}
                  label="New weight"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.input
                  }}
                  InputProps={
                    {
                      inputProps: {
                        min: 0
                      },
                      className: classes.input
                    }}
                  style={{ width: "35%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.diarylabels}>
            <WhiteButton startIcon={<AddCircleOutline />} onClick={onAddFood}>Add food</WhiteButton>
          </div>
          <div className={classes.diarylabels}>
            <WhiteButton startIcon={<AddCircleOutline />} onClick={onAddExercise}>Add exercise</WhiteButton>
          </div>
          <div className={classes.diarylabels}>
            <WhiteButton startIcon={<AddCircleOutline />} onClick={onAddWeight}>Add weight</WhiteButton>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.row}>
          <div className={classes.recipelabels}>
            <WhiteLabel>My recipes</WhiteLabel>

            {recipes.map((row, index) => (
              <div>
                <span onClick={() => handleClickOpenRecipe(index)}>
                  <WhiteLabel>{row.title}</WhiteLabel>
                </span>

              </div>

            ))}
            {
              selectedRecipeIndex !== null ? <Dialog open={openRecipe} onClose={handleCloseRecipe} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{recipes[selectedRecipeIndex].title}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {recipes[selectedRecipeIndex].title}
                  </DialogContentText>
                  <textarea value={recipes[selectedRecipeIndex].content} rows="4" disabled style={{ color: "black", backgroundColor: "transparent", border: "none", fontSize: "14px", resize: "none", marginBottom: "7%" }} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseRecipe} color="primary">
                    OK
                  </Button>
                </DialogActions>
              </Dialog> :
                <></>
            }
          </div>
          <div className={classes.recipelabels}>
            <WhiteLabel>New recipe</WhiteLabel>
          </div>
        </div>
        <div style={{ paddingLeft: "57%" }}>
          {addButtonClicked ?
            (<NewTextField
              multiline
              label="Write your recipe here"
              rows={10}
              rowsMax={20}
              margin="normal"
              value={recipe}
              variant="outlined"
              InputLabelProps={{
                className: classes.input
              }}
              InputProps={{
                className: classes.input
              }}
              onChange={
                (e) => {

                  setRecipe(e.target.value)
                  e.target.value !== '' ? setDisabled(false) : setDisabled(true)
                }
              }
              error={!!errors.ingredients}
              helperText={errors?.ingredients?.message}
            />) : (<div></div>)}
        </div>
        <div className={classes.diarybuttons}>

        </div>
        <div className={classes.row}>
          <div className={classes.recipelabels}>

          </div>
          <div className={classes.addbutton}>
            <WhiteButton startIcon={<AddCircleOutline />} onClick={() => setAddButtonClicked(true)}>Add ingredients</WhiteButton>
          </div>
          <div className={classes.savebutton}>
            <WhiteButton disabled={disabled} startIcon={<Save />} className={classes.buttonwidth} onClick={handleClickOpen}>Save recipe</WhiteButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Enter a title</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter a title for your recipe
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Title"
                  value={title}
                  onChange={
                    e => setTitle(e.target.value)
                  }
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" onClick={handleSubmitRecipe} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4} >
        <div className={classes.row}>
          <form id="1" name="split" onSubmit={handleSubmit(handleSplit)}>
            <div className={classes.label}>
              <WhiteLabel>
                New Split
              </WhiteLabel>
            </div>
            <div className={classes.slider}>
              <div>
                <WhiteLabel>
                  Times a week
                </WhiteLabel>
              </div>
              <div>
                <CustSlider
                  value={times}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={1}
                  onChange={handleTimes}
                  min={1}
                  max={7}
                  valueLabelDisplay="auto"
                  marks={marks}

                />
              </div>
            </div>
            <div className={classes.slider}>
              <WhiteMainLabel component="legend">Concetrated on</WhiteMainLabel>
              <RadioGroup aria-label="focus" name="focus1" value={focus} onChange={handleFocus}>
                <WhiteControlLabel value="arms" control={<BWRadio />} label="Arms" />
                <WhiteControlLabel value="back" control={<BWRadio />} label="Back" />
                <WhiteControlLabel value="chest" control={<BWRadio />} label="Chest" />
                <WhiteControlLabel value="legsAbs" control={<BWRadio />} label="Legs and Arms" />
                <WhiteControlLabel value="shoulders" control={<BWRadio />} label="Shoulders" />
              </RadioGroup>
            </div>
            <div className={classes.button}>
              <WhiteButton type="submit" onClick={generateSplit}>Generate new split</WhiteButton>
              <Dialog open={openSplit} onClose={handleCloseSplit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Training Split</DialogTitle>
                <DialogContent >
                  <DialogContentText>
                    Split
                  </DialogContentText>
                  <textarea id="split" value={split} rows={50} disabled style={{ color: "black", width: "500px", backgroundColor: "transparent", border: "none", fontSize: "14px", resize: "none", marginBottom: "7%" }} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={downloadTxtFile} color="primary">
                    Save as text file
                  </Button>
                  <Button onClick={handleCloseSplit} color="primary">
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </form>
          <form id="2" name="diet">
            <div className={classes.secondLabel}>
              <WhiteLabel>
                New Diet
              </WhiteLabel>
            </div>
            <div className={classes.tb}>
              <WhiteLabel>Choose daily budget for your diet</WhiteLabel>
            </div>
            <div className={classes.tb}>
              <CustSlider
                getAriaValueText={valuetext}
                value={budget}
                aria-labelledby="discrete-slider-custom"
                onChange={(event, newValue) => { setBudget(newValue) }}
                valueLabelDisplay="auto"
              />
            </div>
            <div className={classes.tb}>
              <FormControl component="fieldset">
                <WhiteLabel component="legend">Choose allergens you don't want your diet to include</WhiteLabel>
                <FormGroup>
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={gluten} color="primary" onChange={handleCheckBox} name="gluten" />}
                    label="Cereals containing gluten"
                  />
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={crustacean} color="primary" onChange={handleCheckBox} name="crustacean" />}
                    label="Crustacean and their products"
                  />
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={milk} color="primary" onChange={handleCheckBox} name="milk" />}
                    label="Milk and Milk products"
                  />
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={eggs} color="primary" onChange={handleCheckBox} name="eggs" />}
                    label="Eggs and egg products"
                  />
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={fish} color="primary" onChange={handleCheckBox} name="fish" />}
                    label="Fish and fish products"
                  />
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={nuts} color="primary" onChange={handleCheckBox} name="nuts" />}
                    label="Peanuts, tree nuts and their products"
                  />
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={soybeans} color="primary" onChange={handleCheckBox} name="soybeans" />}
                    label="Soybeans and their products"
                  />
                  <WhiteControlLabel
                    control={<WhiteCheckbox checked={sulphite} color="primary" onChange={handleCheckBox} name="sulphite" />}
                    label="Sulphite in concentrations of 10mg/kg or more"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div >
              <div className={classes.buttons}>
                <WhiteButton style={{ width: "100%" }} onClick={() => {
                  console.log(budget)
                  console.log(checkBoxes)
                  axios('http://localhost:4000/diets', { params: { "calories": Math.round(bmr), "budget": budget, "allergens": checkBoxes } })
                    .then(response => console.log(response))
                }}>Generate new diet</WhiteButton>
              </div>
            </div>
          </form>
        </div>
      </TabPanel>
    </div>
  );
}

export default ProfileTabs