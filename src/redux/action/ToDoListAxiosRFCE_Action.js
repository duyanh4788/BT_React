import Axios from 'axios'
import { GET_TASK_RFCE } from '../Constants/ToDoListAxiosRFCE_Constant'


export const getTaskListRfce_Action = () => {
    return async dispatch => {
        try {
            const res = await Axios({
                method: 'GET',
                url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask"
            })
            dispatch({
                type: GET_TASK_RFCE,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const addTaskListRfce_Action = (data) => {
    return async dispatch => {
        try {
            await Axios({
                method: 'POST',
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                data,
            })
            // dispatch({
            //     type: ADD_TASK_RFCE,
            //     payload: res.data,
            // })
            dispatch(getTaskListRfce_Action())
        } catch (err) {
            console.log(err);
        }
    }
}

export const doneTaskListRfce_Action = (taskName) => {
    return async dispatch => {
        try {
            await Axios({
                method: 'PUT',
                url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            })
            // dispatch({
            //     type: DONE_TASK_RFCE,
            //     payload: res.data
            // })
            dispatch(getTaskListRfce_Action())
        } catch (error) {
            console.log(error);
        }
    }
}
export const rejectTaskListRfce_Action = (taskName) => {
    return async dispatch => {
        try {
            await Axios({
                method: 'PUT',
                url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            })
            // dispatch({
            //     type: REJECT_TASK_RFCE,
            //     payload: res.data
            // })
            dispatch(getTaskListRfce_Action())
        } catch (error) {
            console.log(error);
        }
    }
}
export const deleteTaskListRfce_Action = (taskName) => {
    return async dispatch => {
        try {
            await Axios({
                method: 'DELETE',
                url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            })
            // dispatch({
            //     type: DELETE_TASK_RFCE,
            //     payload: res.data
            // })
            dispatch(getTaskListRfce_Action())
        } catch (error) {
            console.log(error);
        }
    }
}