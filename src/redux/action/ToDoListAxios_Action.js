import { GETALL_TASK_AXIOS, DONE_TASK_AXIOS } from "../Constants/ToDoListAxios_Constant";
import Axios from 'axios';

export const getAllTask = () => {
    return async (dispatch) => {
        try {
            const res = await Axios({
                method: 'GET',
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask'
            })
            dispatch({
                type: GETALL_TASK_AXIOS,
                payload: res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const addTaskAxios_Action = {
    addTask(data) {
        console.log(data);
        return Axios({
            method: 'POST',
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            data,
        })
    }
}
export const doneTaskAxios_Action = (data) => {
    return async (dispatch) => {
        try {
            const res = await Axios({
                method: 'PUT',
                url: "http://svcy.myclass.vn/api/ToDoList/doneTask",
                data,
            })
            dispatch({
                type: DONE_TASK_AXIOS,
                payload: res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}