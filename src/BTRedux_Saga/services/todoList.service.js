import Axios from 'axios'
import { DOMAIN } from '../constants/setttingSystem'

export class ToDoListService {
    getAPI = () => {
        return Axios({
            method: 'GET',
            url: `${DOMAIN}/taksSaga`,
        })
    }
    postAPI = (taskName) => {
        return Axios({
            method: 'POST',
            url: `${DOMAIN}/taksSaga`,
            data: taskName,
        })
    }
    doneAPI = (taskName) => {
        const datas = { ...taskName, status: true }
        return Axios({
            method: 'PUT',
            url: `${DOMAIN}/taksSaga/${taskName.id}`,
            data: datas,
        })
    }
    rejectAPI = (taskName) => {
        const datas = { ...taskName, status: false }
        return Axios({
            method: "PUT",
            url: `${DOMAIN}/taksSaga/${taskName.id}`,
            data: datas,
        })
    }
    deleteAPI = (taskId) => {
        return Axios({
            method: 'DELETE',
            url: `${DOMAIN}/taksSaga/${taskId}`
        })
    }
}

export const toDoListService = new ToDoListService()