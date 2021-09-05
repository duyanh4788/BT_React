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
import CheckIcon from "@material-ui/icons/Check";
import { styled } from "./ToDoList.style";
import { connect } from "react-redux";
import { deleteTaskAxios_Action, reJectTaskAxios_Action } from "../redux/action/ToDoListAxios_Action";

class TableCompletedPage extends Component {
  render() {
    const { classes, taskList, doneTask, dellTask } = this.props;
    return taskList
      .filter((task) => task.status)
      .map((item, index) => {
        return (
          <Table key={index}>
            <TableHead>
              <TableRow>
                <TableCell align="left" className={classes.myTextCell}>
                  {item.taskName}
                </TableCell>
                <TableCell align="right">
                  <Button
                    color="primary"
                    onClick={() => {
                      doneTask(item);
                    }}
                  >
                    <CheckIcon color="primary" />
                  </Button>
                  <Button color="primary" onClick={() => dellTask(item.id)}>
                    <DeleteIcon color="primary" />
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
    doneTask: (items) => {
      dispatch(reJectTaskAxios_Action(items));
    },
    dellTask: (taskId) => {
      dispatch(deleteTaskAxios_Action(taskId));
    },
  };
};
export default connect(
  mapStateToPops,
  mapDispatchToProps
)(withStyles(styled)(TableCompletedPage));
