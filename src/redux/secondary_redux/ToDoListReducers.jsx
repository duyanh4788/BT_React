import {
  CHANGE_THEMES,
  ADD_TASK,
  DONE_TASK_COMPLETED,
  DONE_TASK_TODO,
  EDIT_TASK,
  DELL_TASK,
  UPDATE_TASK,
} from "../Constants/ToDoList_Const";
import { ToDoList_PirmaryThemes } from "../../Styled_Component/ToDoList_Themes/ToDoList_PirmaryThemes";
import { ListThemes } from "../../Styled_Component/ToDoList_Themes/ToDoList_ManagerThemes";

const stateToDoList = {
  themeToDoList: ToDoList_PirmaryThemes,
  taskList: [
    // { id: "task-1", taskName: "task-1", done: true },
    // { id: "task-2", taskName: "task-2", done: true },
    // { id: "task-3", taskName: "task-3", done: false },
    // { id: "task-4", taskName: "task-4", done: false },
  ],
  newTask: {},
  taskEdit: { id: "-1", taskName: "", done: false },
};

export const ToDoListReducers = (state = stateToDoList, action) => {
  let taskListUpdate = [...state.taskList];
  switch (action.type) {
    case ADD_TASK: {
      let newTaskUpdate = {
        id: Date.now(),
        taskName: action.newTask,
        done: false,
      };
      state.newTask = newTaskUpdate;
      if (action.newTask.trim() === "") {
        alert("Nhập Task !!!");
        return { ...state };
      }
      // let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (item) => item.taskName === action.newTask
      );
      if (index !== -1) {
        alert("Task Name Already Exit !!!");
        return { ...state };
      }
      taskListUpdate.push(state.newTask);
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case DONE_TASK_COMPLETED: {
      // let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((item) => item.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }
      return { ...state, taskList: taskListUpdate };
    }
    case DONE_TASK_TODO: {
      // let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((item) => item.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].done = false;
      }
      return { ...state, taskList: taskListUpdate };
    }
    case DELL_TASK: {
      let index = taskListUpdate.findIndex((item) => item.id === action.taskId);
      taskListUpdate.splice(index, 1);
      return { ...state, taskList: taskListUpdate };
    }
    case EDIT_TASK: {
      return { ...state, taskEdit: action.task };
    }
    case CHANGE_THEMES: {
      let slectThemes = ListThemes.find((item) => item.id.toString() === action.themeid.toString());
      if (slectThemes) {
        state.themeToDoList = slectThemes.theme;
      }
      return { ...state };
    }
    case UPDATE_TASK: {
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };
      let indexTrung = taskListUpdate.findIndex(
        (item) => item.taskName === state.taskEdit.taskName
      );
      if (indexTrung !== -1) {
        alert("Task Name Already Exit !!!");
        return { ...state };
      }
      let index = taskListUpdate.findIndex(
        (item) => item.id === state.taskEdit.id
      );
      if (index !== -1) {
        taskListUpdate[index] = state.taskEdit;
      }
      state.taskList = taskListUpdate;
      state.taskEdit = { id: "-1", taskName: "", done: false };
      return { ...state };
    }
    default:
      return { ...state };
  }
};
