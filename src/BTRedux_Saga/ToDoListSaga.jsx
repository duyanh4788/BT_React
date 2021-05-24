import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import TableToDoSaga from "./TableToDoSaga";
import TableCompleteSaga from "./TableCompleteSaga";

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

function ToDoListSaga() {
  const classes = useStyles();
  const [task, setTask] = useState({
    values: {
      taskName: "",
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "getTaskAPIaction",
    });
  }, [dispatch]);

  const hanldeChange = (e) => {
    let { name, value } = e.target;
    let valuesUpdate = { ...task.values, [name]: value };
    setTask({
      ...task,
      values: valuesUpdate,
    });
  };
  const adTask = () => {
    dispatch({
      type: "addTaskAction",
      taskName: task.values.taskName,
    });
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
              onChange={hanldeChange}
            />
          </FormControl>
          <Button
            color="secondary"
            variant="outlined"
            className={classes.myBtnAdd}
            onClick={adTask}
          >
            <Typography color="secondary">Add-Task</Typography>
          </Button>
        </Grid>
        <Divider className={classes.myHr} />
        <Typography className={classes.myIntro} color="secondary">
          Task To Do
        </Typography>
        <TableToDoSaga />
        <Typography className={classes.myIntro} color="secondary">
          Task Completed
        </Typography>
        <TableCompleteSaga />
      </Container>
    </>
  );
}

export default ToDoListSaga;
