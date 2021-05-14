import {
  GETALL_TASK_AXIOS,
  DONE_TASK_AXIOS,
} from "../Constants/ToDoListAxios_Constant";

const initalState = {
  taskList: [],
  newTask: {},
};

export const ToDoListAxiosReducer = (state = initalState, action) => {
  console.log(action);
  let taskListUpdate = [...state.taskList];
  switch (action.type) {
    case GETALL_TASK_AXIOS: {
      state.taskList = action.payload;
      return { ...state };
    }
    case DONE_TASK_AXIOS: {
      let index = taskListUpdate.findIndex(
        (item) => item.taskName === action.payload
      );
      if (index !== -1) {
        taskListUpdate[index] = true;
      }
      state.taskList = taskListUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
