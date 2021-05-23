import React, { useEffect } from "react";
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
import {
    deleteTaskListRfce_Action,
  doneTaskListRfce_Action,
  getTaskListRfce_Action,
} from "../redux/action/ToDoListAxiosRFCE_Action";

const useStyles = makeStyles(() => ({
  myTextCell: {
    fontSize: "20px",
    fontWeight: "bold",
  },
}));

function TableToDoRfc() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => {
    return state.ToDoListAxiosFunctionReducer.taskList;
  });
  useEffect(() => {
    dispatch(getTaskListRfce_Action());
  }, [dispatch]);

  const doneTask = (task) => {
    dispatch(doneTaskListRfce_Action(task));
  };
  const dellTask = (task) => {
    dispatch(deleteTaskListRfce_Action(task));
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
                    doneTask(item.taskName);
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

export default TableToDoRfc;
