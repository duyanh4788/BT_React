import React, { memo, useEffect } from "react";
import {
  Button,
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  myTextCell: {
    fontSize: "20px",
    fontWeight: "bold",
  },
}));

function TableToDoSaga() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => {
    return state.ToDoListAxiosSagaReducer.taskList;
  });
  useEffect(() => {}, []);

  const checkTask = (taskName) => {
    dispatch({
      type: "doneTaskAction",
      taskName,
    });
  };
  const dellTask = (taskName) => {
    dispatch({
      type: "deleteTaskAction",
      taskName,
    });
  };
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
                  <EditIcon color="primary" />
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    checkTask(item.taskName);
                  }}
                >
                  <CheckIcon color="primary" />
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    dellTask(item.taskName);
                  }}
                >
                  <DeleteIcon color="primary" />
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      );
    });
}

export default memo(TableToDoSaga);