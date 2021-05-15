import React, { Component } from "react";
import {
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import { styled } from "./ToDoList.style";
import { connect } from "react-redux";
import {
  deleteTaskAxios_Action,
  doneTaskAxios_Action,
} from "../redux/action/ToDoListAxios_Action";

class TableToDoPage extends Component {
  render() {
    const { classes, taskList, doneTask, dellTask } = this.props;
    return taskList
      .filter((task) => !task.status)
      .map((item, index) => {
        return (
          <Table key={index}>
            <TableHead>
              <TableRow>
                <TableCell align="left" className={classes.myTextCell}>
                  {item.taskName}
                </TableCell>
                <TableCell align="right">
                  <Button>
                    <EditIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      doneTask(item.taskName);
                    }}
                  >
                    <CheckIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      dellTask(item.taskName);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        );
      });
  }
}
const mapStateToPops = (state) => {
  return {
    taskList: state.ToDoListAxiosReducer.taskList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    doneTask: (taskName) => {
      dispatch(doneTaskAxios_Action(taskName));
    },
    dellTask: (task) => {
      console.log(task);
      dispatch(deleteTaskAxios_Action(task));
    },
  };
};
export default connect(
  mapStateToPops,
  mapDispatchToProps
)(withStyles(styled)(TableToDoPage));
