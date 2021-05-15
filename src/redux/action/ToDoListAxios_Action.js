import {
  GETALL_TASK_AXIOS,
  ADD_TASK_AXIOS,
  DELETE_TASK_AXIOS,
  DONE_TASK_AXIOS,
  REJECT_TASK_AXIOS,
} from "../Constants/ToDoListAxios_Constant";
import Axios from "axios";

export const getAllTask = () => {
  return async (dispatch) => {
    try {
      const res = await Axios({
        method: "GET",
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      });
      dispatch({
        type: GETALL_TASK_AXIOS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTaskAxios_Action = (task) => {
  return async (dispatch) => {
    try {
      const res = await Axios({
        method: "POST",
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        data: task,
      });
      dispatch({
        type: ADD_TASK_AXIOS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const doneTaskAxios_Action = (taskName) => {
  return async (dispatch) => {
    try {
      await Axios({
        method: "PUT",
        url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      });
      dispatch({
        type: DONE_TASK_AXIOS,
        payload: taskName,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const reJectTaskAxios_Action = (taskName) => {
  return async (dispatch) => {
    try {
      await Axios({
        method: "PUT",
        url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      });
      dispatch({
        type: REJECT_TASK_AXIOS,
        payload: taskName,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTaskAxios_Action = (taskName) => {
  return async (dispatch) => {
    try {
      const res = await Axios({
        method: "DELETE",
        url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      });
      dispatch({
        type: DELETE_TASK_AXIOS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
