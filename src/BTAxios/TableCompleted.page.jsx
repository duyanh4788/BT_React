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
import { doneTaskAxios_Action } from "../redux/action/ToDoListAxios_Action";

class TableCompletedPage extends Component {
  render() {
    const { classes, taskList, doneTask } = this.props;
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
                    onClick={() => {
                      doneTask(item.status);
                    }}
                  >
                    <CheckIcon />
                  </Button>
                  <Button>
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
    doneTask: (status) => {
      dispatch(doneTaskAxios_Action(status));
    },
  };
};
export default connect(
  mapStateToPops,
  mapDispatchToProps
)(withStyles(styled)(TableCompletedPage));
