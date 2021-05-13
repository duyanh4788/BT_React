import {
  CHANGE_THEMES,
  ADD_TASK,
  DONE_TASK_COMPLETED,
  DONE_TASK_TODO,
  EDIT_TASK,
  DELL_TASK,
  UPDATE_TASK,
} from "../Constants/ToDoList_Const";

export const changeThemes_Action = (themeid) => {
  return {
    type: CHANGE_THEMES,
    themeid,
  };
};

export const addTask_Action = (newTask) => {
  return {
    type: ADD_TASK,
    newTask,
  };
};

export const doneTaskCompleted_Action = (taskId) => {
  return {
    type: DONE_TASK_COMPLETED,
    taskId,
  };
};
export const doneTaskToDo_Action = (taskId) => {
  return {
    type: DONE_TASK_TODO,
    taskId,
  };
};
export const editTask_Action = (task) => {
  return {
    type: EDIT_TASK,
    task,
  };
};
export const dellTask_Action = (taskId) => {
  return {
    type: DELL_TASK,
    taskId,
  };
};
export const updateTask_Action = (taskName) => {
  return {
    type: UPDATE_TASK,
    taskName,
  };
};
