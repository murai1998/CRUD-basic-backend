import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import actions from '../services/Service.js'
import { TextField } from '@material-ui/core';
import Tooltip from "@material-ui/core/Tooltip";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  paper: {
    width: 260,
    height: 400,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setPlans] = React.useState([]);
  const [right, setGoals] = React.useState([]);
  const [middle, setDreams] = React.useState([])
  const [newLeft, setNewLeft] = React.useState('')
  const [newRight, setNewRight] = React.useState('')
  const [newMiddle, setNewMiddle] = React.useState('')
  const [showL, setShowL] = React.useState(false)
  const [showR, setShowR] = React.useState(false)
  const [showM, setShowM] = React.useState(false)
useEffect(()=>{
    const fetchData = async()=>{
        try{
        const result = await actions.getAllPlans();
        const result2 = await actions.getAllGoals();
        const result3 = await actions.getAllDreams();

        setPlans(result.data)
        setGoals(result2.data)
        setDreams(result3.data)
        } catch(err){
            console.log(err)
        }
    }
    fetchData()
}, [])
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  const middleChecked = intersection(checked, middle);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = async() => {
    try{
    setGoals(right.concat(left));
    let res = await actions.createGoals(left)
    setPlans([]);
    let res2 = await actions.deletePlansAll()
    console.log(res2)
    } catch(err){
      console.log(err)
    }
  };

  const handleAllRight2 = async() => {
    try{
    setDreams(middle.concat(right));
    let res = await actions.createDreams(right)
    setGoals([]);
    let res2 = await actions.deleteGoalsAll()
    console.log(res2)
    } catch(err){
      console.log(err)
    }
  };

  const handleCheckedRight = () => {
    setGoals(right.concat(leftChecked));
    setPlans(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };
  const deleteCheckedLeft = async(e) => {
    try{
        e.preventDefault();
        console.log("Here")
        let ids = [];
        if(leftChecked.length > 0){
        leftChecked.map(x=>{
            ids.push(x.id)
        })
        console.log(ids.join(','))
        let result = await actions.removePlan(ids.join(','));
        console.log('delete', result)
        setPlans(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    }
    }catch(err){
        console.log(err)
    }
  };
  const deleteCheckedRight = async(e) => {
    try{
        e.preventDefault();
        console.log("Here")
        let ids = [];
        if(rightChecked.length > 0){
            rightChecked.map(x=>{
            ids.push(x.id)
        })
        console.log(ids.join(','))
        let result = await actions.removeGoal(ids.join(','));
        console.log('delete', result)
        setGoals(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    }
    }catch(err){
        console.log(err)
    }
  };

  const addNewItemL2 = async(e)=>{
    setShowL(!showL)
  }
  const addNewItemR2 = async(e)=>{
    setShowR(!showR)
  }
  const addNewItemM2 = async(e)=>{
    setShowM(!showM)
  }
  const deleteCheckedMiddle = async(e) => {
    try{
      e.preventDefault();
      console.log("Here3")
      let ids = [];
      if(middleChecked.length > 0){
        middleChecked.map(x=>{
          ids.push(x.id)
      })
      console.log(ids.join(','))
      let result = await actions.removeDream(ids.join(','));
      console.log('delete', result)
      setDreams(not(middle, middleChecked));
      setChecked(not(checked, middleChecked));
  }
  }catch(err){
      console.log(err)
  }
  };
  const handleCheckedLeft = () => {
    setPlans(left.concat(rightChecked));
    setGoals(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setPlans(left.concat(right));
    setGoals([]);
  };
//=====================================


  const handleCheckedRight2 = () => {
    setDreams(middle.concat(rightChecked));
    setGoals(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleCheckedLeft2 = () => {
    setGoals(right.concat(middleChecked));
    setDreams(not(middle, middleChecked));
    setChecked(not(checked, middleChecked));
  };

  const handleAllLeft2 = () => {
    setGoals(right.concat(middle));
    setDreams([]);
  };

const addNewItem =(e) =>{
    setNewLeft(e.target.value)

}
const addNewItemR =(e) =>{
  setNewRight(e.target.value)
}

const addNewItemM =(e) =>{
  setNewMiddle(e.target.value)
}
const handleSubmitTextL = async()=>{

let obj = {description: newLeft}
console.log(obj)
setNewLeft('')
let newItem = await actions.createPlan({description: newLeft})
setPlans([...setPlans, {description: newLeft}])

}

const handleSubmitTextR = async()=>{

  let obj = {description: newRight}
  console.log(obj)
  setNewRight('')
  let newItem = await actions.createGoal({description: newRight})
  setGoals([...setGoals, {description: newRight}])
  
  }

  const handleSubmitTextM = async()=>{

    let obj = {description: newMiddle}
    console.log(obj)
    setNewMiddle('')
    let newItem = await actions.createDream({description: newMiddle})
    setDreams([...setDreams, {description: newMiddle}])
    
    }

  const customList = (items, deleteCheckedMiddle, addNewI) => (
    <div>
  <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItem key={value.description} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.description} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
    <Paper>   <Tooltip title="Delete Items">
            <IconButton>
              <DeleteOutlineOutlinedIcon onClick={deleteCheckedMiddle}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Add a new item">
            <IconButton>
               <AddCircleOutlineIcon onClick={addNewI}/>
            </IconButton>
          </Tooltip>
         
          </Paper>
    </div>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList(left, deleteCheckedLeft, addNewItemL2)}</Grid>
     {showL ? <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmitTextL}>
  <TextField onChange={addNewItem} id="standard-basic" label="Standard" />
  <Button type="submit">
                    Submit
                    </Button>
</form> :('')}
    
      <Grid item>
 
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right, deleteCheckedRight, addNewItemR2)}</Grid>
      {showR ? <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmitTextR}>
  <TextField onChange={addNewItemR} id="standard-basic" label="Standard" />
  <Button type="submit">
                    Submit
                    </Button>
</form> :(
  ''
)}
      
   
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight2}
            disabled={right.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight2}
            disabled={rightChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft2}
            disabled={middleChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft2}
            disabled={middle.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
    
      </Grid>
      <Grid item>{customList(middle, deleteCheckedMiddle, addNewItemM2)}</Grid>
      {showM ? <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmitTextM}>
  <TextField onChange={addNewItemM} id="standard-basic" label="Standard" />
  <Button type="submit">
                    Submit
                    </Button>
</form> : ''}
    </Grid>
  );
}
