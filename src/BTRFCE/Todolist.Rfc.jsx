import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import TableToDoRfc from "./TableToDo.Rfc";
import TableCompleteRfc from "./TableComplete.Rfc";
import { useDispatch } from "react-redux";
import { addTaskListRfce_Action } from "../redux/action/ToDoListAxiosRFCE_Action";

const useStyles = makeStyles(() => ({
  myMain: {
    border: "5px solid #d84315",
    padding: "20px",
  },
  myIntro: {
    fontSize: "30px",
  },
  myInput: {
    width: "60%",
  },
  myBtnAdd: {
    margin: "0 5px",
    fontWeight: "bold",
    color: "black",
    fontSize: "20px",
  },
  myHr: {
    margin: "50px 0",
  },
}));
function TodolistRfc() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    taskList: [],
    values: {
      taskName: "",
    },
    error: {
      taskName: "",
    },
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    let valuesUpdate = { ...task.values, [name]: value };
    setTask({
      ...task,
      values: valuesUpdate,
    });
  };
  const handleAddTask = (task) => {
    const data = { taskName: task.taskName, status: false }
    dispatch(addTaskListRfce_Action(data));
  };
  return (
    <>
      <Container maxWidth="lg" className={classes.myMain}>
        <Typography className={classes.myIntro} color="secondary">
          ToDoList
        </Typography>
        <Grid container spacing={1}>
          <FormControl
            fullWidth
            variant="filled"
            spacing={1}
            className={classes.myInput}
          >
            <InputLabel variant="standard" color="secondary">
              Task Name
            </InputLabel>
            <FilledInput
              color="secondary"
              name="taskName"
              onChange={handleChange}
            />
          </FormControl>
          <Button
            color="secondary"
            variant="outlined"
            className={classes.myBtnAdd}
            onClick={() => {
              handleAddTask(task.values);
            }}
          >
            <Typography color="secondary">Add-Task</Typography>
          </Button>
        </Grid>
        <Divider className={classes.myHr} />
        <Typography className={classes.myIntro} color="secondary">
          Task To Do
        </Typography>
        <TableToDoRfc />
        <Typography className={classes.myIntro} color="secondary">
          Task Completed
        </Typography>
        <TableCompleteRfc />
      </Container>
    </>
  );
}

export default TodolistRfc;
