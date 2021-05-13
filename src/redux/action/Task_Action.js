import {
  ADD_TASK_LIST,
  CHANGE_THEMES_TL,
  DONE_TODO_TL,
  DONE_COMPLTE_TL,
  DELL_TASKLIST,
  EDIT_TASKLIST,
  UPDATE_TASKLIST,
} from "../Constants/Task_Const";

export const addTaskList_Action = (newTaskName) => ({
  type: ADD_TASK_LIST,
  newTaskName,
});

export const changeThemes_Action = (themes) => ({
  type: CHANGE_THEMES_TL,
  themes,
});

export const doneToDo_Action = (done) => ({
  type: DONE_TODO_TL,
  done,
});
export const doneComplte_Action = (done) => ({
  type: DONE_COMPLTE_TL,
  done,
});

export const deleteTask_Action = (id) => ({
  type: DELL_TASKLIST,
  id,
});
export const editTask_Action = (taskName) => ({
  type: EDIT_TASKLIST,
  taskName,
});
export const upDateTask_Action = (taskName) => ({
    type: UPDATE_TASKLIST,
    taskName,
  });