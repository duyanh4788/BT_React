import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
// Action
import {
  addTaskList_Action,
  changeThemes_Action,
  upDateTask_Action,
} from "../../redux/action/Task_Action";
// themes
import { ListThemes } from "../../Styled_Component/ToDoList_Themes/ToDoList_ManagerThemes";
// Styled Component
import { ThemeProvider } from "styled-components";
import {
  Container,
  Div,
} from "../../Styled_Component/ToDoList_Component/Container";
import { Heading3 } from "../../Styled_Component/ToDoList_Component/Heading";
import { Dropdown } from "../../Styled_Component/ToDoList_Component/Dropdown";
import { TextField } from "../../Styled_Component/ToDoList_Component/TextField";
import { Button } from "../../Styled_Component/ToDoList_Component/Button";
import { Hr } from "../../Styled_Component/ToDoList_Component/Hr";
import TableToDo from "./TableToDo";
import TableComplete from "./TableComplete";
// Styled Component

class TaskList extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {}
  // }
  // static getDerivedStateFromProps(newProps, currentState) {
  //     return null
  // }
  // componentWillReceiveProps(newProps) {
  //     console.log(this.props);
  //     console.log(newProps);
  // }
  state = {
    taskName: "",
  };
  handleChange = (e) => {
    this.setState({
      taskName: e.target.value,
    });
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
  renderUpdate = (taskName) => {
    const { upDateTask } = this.props;
    upDateTask(taskName);
    document.getElementById("upDate").disabled = true;
    document.getElementById("addTask").style.display = "inline-block";
  };
  rederAddTask = (taskName) => {
    const { addTask } = this.props;
    addTask(taskName);
    document.getElementById("inputTaskList").value = "";
  };
  render() {
    const { themesToDoList, changeThemes } = this.props;
    let { taskName } = this.state;
    return (
      <ThemeProvider theme={themesToDoList}>
        <Container>
          {/* change themes */}
          <Dropdown
            onChange={(e) => {
              changeThemes(e.target.value);
            }}
          >
            {this.renderThemes()}
          </Dropdown>
          <Heading3>To Do List</Heading3>
          <Div>
            {/* input */}
            <TextField
              label="Task Name"
              value={taskName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            {/* add task */}
            <Button id="addTask" onClick={() => { this.rederAddTask(taskName) }}>
              <i className="fa fa-plus">Add Task</i>
            </Button>
            <Button id="upDate" disabled={true}>
              <i
                className="fa fa-upload"
                onClick={() => {
                  let { taskName } = this.state;
                  this.setState({ taskName: "" }, () => { this.renderUpdate(taskName) })
                }}
              >
                UpDate Task{" "}
              </i>
            </Button>
          </Div>
          <Hr />
          <Heading3>Task To Do</Heading3>
          <TableToDo />
          <Hr />
          <Heading3>Task Completed</Heading3>
          <TableComplete />
        </Container>
      </ThemeProvider>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToPops = (state) => {
  return {
    themesToDoList: state.TaskListReducers.themesToDoList,
    taskEdit: state.TaskListReducers.taskEdit,
  };
};
const mapDispatchToProps = (dispacth) => {
  return {
    addTask: (newTaskName) => {
      dispacth(addTaskList_Action(newTaskName));
    },
    changeThemes: (themes) => {
      dispacth(changeThemes_Action(themes));
    },
    upDateTask: (taskName) => {
      dispacth(upDateTask_Action(taskName));
    },
  };
};
export default connect(mapStateToPops, mapDispatchToProps)(TaskList);
