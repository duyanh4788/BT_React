import React, { Component } from "react";
import TableToDoPage from "./TableToDo.page";
import TableCompletedPage from "./TableCompleted.page";

import { styled } from "./ToDoList.style";
import {
  Button,
  Container,
  Divider,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  Typography,
  withStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  addTaskAxios_Action,
  getAllTask,
} from "../redux/action/ToDoListAxios_Action";

class ToDoListpage extends Component {
  state = {
    values: {
      taskName: "",
    },
    error: {
      taskName: '',
    }
  };
  handleChange = (e) => {
    let { name, value } = e.target;
    let valuesUpdate = { ...this.state.values, [name]: value };
    this.setState({
      values: valuesUpdate,
    });
  };
  handleAddTask = (task) => {
    const dataS = { taskName: task.taskName, status: false }
    this.props.dispatch(addTaskAxios_Action(dataS))
  };
  render() {
    const { classes } = this.props;
    const { taskName } = this.state.values;
    return (
      <>
        <Container maxWidth="lg" className={classes.myMain}>
          <Typography className={classes.myIntro} color="primary">
            ToDoList
          </Typography>
          <Grid container spacing={1}>
            <FormControl
              fullWidth
              variant="filled"
              spacing={1}
              className={classes.myInput}
            >
              <InputLabel variant="standard" color="primary">
                Task Name
              </InputLabel>
              <FilledInput
                color="primary"
                value={taskName}
                name="taskName"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </FormControl>
            <Button
              color="primary"
              variant="outlined"
              className={classes.myBtnAdd}
              onClick={() => {
                this.handleAddTask(this.state.values);
              }}
            >
              <Typography color="primary">
                Add-Task
              </Typography>
            </Button>
          </Grid>
          <Divider className={classes.myHr} />
          <Typography className={classes.myIntro} color="primary">
            Task To Do
          </Typography>
          <TableToDoPage />
          <Typography className={classes.myIntro} color="primary">
            Task Completed
          </Typography>
          <TableCompletedPage />
        </Container>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(getAllTask());
  }
}
export default connect()(withStyles(styled)(ToDoListpage));