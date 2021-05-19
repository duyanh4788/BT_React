import {
  GETALL_TASK_AXIOS,
  DONE_TASK_AXIOS,
  DELETE_TASK_AXIOS,
  ADD_TASK_AXIOS,
  REJECT_TASK_AXIOS,
} from "../Constants/ToDoListAxios_Constant";

const initalState = {
  taskList: [],
};

export const ToDoListAxiosReducer = (state = initalState, action) => {
  let taskListUpdate = [...state.taskList];
  switch (action.type) {
    case GETALL_TASK_AXIOS: {
      state.taskList = action.payload;
      return { ...state };
    }
    case ADD_TASK_AXIOS: {
      taskListUpdate.push(action.payload);
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case DELETE_TASK_AXIOS: {
      let index = taskListUpdate.findIndex(
        (item) => item.id === action.payload
      );
      taskListUpdate.splice(index, 1);
      return { ...state, taskList: taskListUpdate };
    }
    case DONE_TASK_AXIOS: {
      let index = taskListUpdate.findIndex(
        (item) => item.taskName === action.payload
      );
      if (index !== -1) {
        taskListUpdate[index].status = true;
      }
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case REJECT_TASK_AXIOS: {
      let index = taskListUpdate.findIndex(
        (item) => item.taskName === action.payload
      );

      if (index !== -1) {
        taskListUpdate[index].status = false;
      }
      state.taskList = taskListUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
