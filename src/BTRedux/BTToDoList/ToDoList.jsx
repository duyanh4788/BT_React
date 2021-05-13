import React, { Component } from "react";
import { ListThemes } from "../../Styled_Component/ToDoList_Themes/ToDoList_ManagerThemes";
import { ThemeProvider } from "styled-components";
import { Container } from "../../Styled_Component/ToDoList_Component/Container";
import { Dropdown } from "../../Styled_Component/ToDoList_Component/Dropdown";
import { Heading3 } from "../../Styled_Component/ToDoList_Component/Heading";
import { TextField } from "../../Styled_Component/ToDoList_Component/TextField";
import { Button } from "../../Styled_Component/ToDoList_Component/Button";
import {
  Table,
  Th,
  Thead,
  Tr,
} from "../../Styled_Component/ToDoList_Component/Table";
import { Hr } from "../../Styled_Component/ToDoList_Component/Hr";
import { connect } from "react-redux";
import {
  addTask_Action,
  dellTask_Action,
  doneTaskCompleted_Action,
  doneTaskToDo_Action,
  editTask_Action,
  changeThemes_Action,
  updateTask_Action,
} from "../../redux/action/ToDoList_Action";

class ToDoList extends Component {
  state = {
    taskName: "",
    disabledUpdate: true,
    disabledAdd: false,
  };
  renderThemes = () => {
    return ListThemes.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
  };
  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }
  // static getDerivedStateFromProps(newProps, currentState) {
  //   let newTask = { ...currentState, taskName: newProps.taskEdit.taskName };
  //   return newTask;
  // }
  renderTableList = () => {
    const { taskList, doneTaskComplete, dellTask, editTask } = this.props;
    return taskList
      .filter((item) => !item.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th className="text-left">{item.taskName}</Th>
            <Th className="text-right">
              <Button>
                <i
                  className="fas fa-edit"
                  onClick={() =>
                    this.setState(
                      {
                        disabledUpdate: false,
                        disabledAdd: true
                      },
                      () => {
                        editTask(item);
                      }
                    )
                  }
                ></i>
              </Button>
              <Button>
                <i
                  className="fas fa-check"
                  onClick={() => doneTaskComplete(item.id)}
                ></i>
              </Button>
              <Button onClick={() => dellTask(item.id)}>
                <i className="fas fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskCompleted = () => {
    const { taskList, doneTaskToDo, dellTask } = this.props;
    return taskList
      .filter((item) => item.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th className="text-left">{item.taskName}</Th>
            <Th className="text-right">
              <Button>
                <i
                  className="fas fa-check"
                  onClick={() => doneTaskToDo(item.id)}
                ></i>
              </Button>
              <Button onClick={() => dellTask(item.id)}>
                <i className="fas fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      taskName: value,
    });
  };
  render() {
    const { themeToDoList, addTask, changeThemes, updateTask } = this.props;
    return (
      <ThemeProvider theme={themeToDoList}>
        <Container>
          <Dropdown onChange={(e) => changeThemes(e.target.value)}>
            {this.renderThemes()}
          </Dropdown>
          <Heading3>ToDoList</Heading3>
          <div className="taskName text-left">
            <TextField
              name="taskName"
              label="Task Name"
              value={this.state.taskName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            {this.state.disabledAdd ? <Button disabled onClick={() => addTask(this.state.taskName)}>
              <i className="fas fa-plus"></i>Add Task
            </Button> : <Button onClick={() => addTask(this.state.taskName)}>
              <i className="fas fa-plus"></i>Add Task
            </Button>}

            {this.state.disabledUpdate ? (
              <Button disabled onClick={() => updateTask(this.state.taskName)}>
                <i className="fas fa-upload"></i>Update Task
              </Button>
            ) : (
              <Button
                onClick={() => {
                  let { taskName } = this.state;
                  this.setState(
                    {
                      disabledUpdate: true,
                      disabledAdd: false,
                      taskName: "",
                    },
                    () => {
                      updateTask(taskName);
                    }
                  );
                }}
              >
                <i className="fas fa-upload"></i>Update Task
              </Button>
            )}
          </div>
          <Hr />
          <div className="toDo">
            <Heading3>Task ToDo</Heading3>
            <Table>
              <Thead>{this.renderTableList()}</Thead>
            </Table>
          </div>
          <Hr />
          <div className="taskCompledt">
            <Heading3>Task Completed</Heading3>
            <Table>
              <Thead>{this.renderTaskCompleted()}</Thead>
            </Table>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    const { taskEdit } = this.props;
    if (prevProps.taskEdit.id !== taskEdit.id) {
      this.setState({
        taskName: taskEdit.taskName,
      });
    }
  }
}
const mapStateToPops = (state) => {
  return {
    themeToDoList: state.ToDoListReducers.themeToDoList,
    taskList: state.ToDoListReducers.taskList,
    taskEdit: state.ToDoListReducers.taskEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => {
      dispatch(addTask_Action(newTask));
    },
    doneTaskComplete: (taskId) => {
      dispatch(doneTaskCompleted_Action(taskId));
    },
    doneTaskToDo: (taskId) => {
      dispatch(doneTaskToDo_Action(taskId));
    },
    dellTask: (taskId) => {
      dispatch(dellTask_Action(taskId));
    },
    editTask: (task) => {
      dispatch(editTask_Action(task));
    },
    changeThemes: (themeid) => {
      dispatch(changeThemes_Action(themeid));
    },
    updateTask: (taskName) => {
      dispatch(updateTask_Action(taskName));
    },
  };
};
export default connect(mapStateToPops, mapDispatchToProps)(ToDoList);
