import Axios from 'axios'
import { GET_TASK_RFCE } from '../Constants/ToDoListAxiosRFCE_Constant'


export const getTaskListRfce_Action = () => {
    return async dispatch => {
        try {
            const res = await Axios({
                method: 'GET',
                url: "https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga"
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
                url: 'https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga',
                data,
            })
            dispatch(getTaskListRfce_Action())
        } catch (err) {
            console.log(err);
        }
    }
}

export const doneTaskListRfce_Action = (taskName) => {
    const dataS = { ...taskName, status: true }
    return async dispatch => {
        try {
            await Axios({
                method: 'PUT',
                url: `https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga/${taskName.id}`,
                data: dataS,
            })
            dispatch(getTaskListRfce_Action())
        } catch (error) {
            console.log(error);
        }
    }
}
export const rejectTaskListRfce_Action = (taskName) => {
    const dataS = { ...taskName, status: false }
    return async dispatch => {
        try {
            await Axios({
                method: 'PUT',
                url: `https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga/${taskName.id}`,
                data: dataS,
            })
            dispatch(getTaskListRfce_Action())
        } catch (error) {
            console.log(error);
        }
    }
}
export const deleteTaskListRfce_Action = (taskId) => {
    return async dispatch => {
        try {
            await Axios({
                method: 'DELETE',
                url: `https://6044318ba20ace001728ebad.mockapi.io/api/taksSaga/${taskId}`,
            })
            dispatch(getTaskListRfce_Action())
        } catch (error) {
            console.log(error);
        }
    }
}