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
        url: "https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga"
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
        url: "https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga",
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
  const dataS = { ...taskName, status: true }
  return async (dispatch) => {
    try {
      await Axios({
        method: "PUT",
        url: `https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga/${taskName.id}`,
        data: dataS
      });
      dispatch({
        type: DONE_TASK_AXIOS,
        payload: dataS.taskName,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const reJectTaskAxios_Action = (taskName) => {
  const dataS = { ...taskName, status: false }
  return async (dispatch) => {
    try {
      await Axios({
        method: "PUT",
        url: `https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga/${taskName.id}`,
        data : dataS
      });
      console.log(dataS);
      dispatch({
        type: REJECT_TASK_AXIOS,
        payload: dataS.taskName,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTaskAxios_Action = (taskId) => {
  return async (dispatch) => {
    try {
      const res = await Axios({
        method: "DELETE",
        url: `https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga/${taskId}`,
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
