import Axios from 'axios'
import { DOMAIN } from '../constants/setttingSystem'

export class ToDoListService {
    getAPI = () => {
        return Axios({
            method: 'GET',
            url: `${DOMAIN}/ToDoList/GetAllTask`,
        })
    }
    postAPI = (taskName) => {
        return Axios({
            method: 'POST',
            url: `${DOMAIN}/ToDoList/AddTask`,
            data: taskName,
        })
    }
    doneAPI = (taskName) => {
        return Axios({
            method: 'PUT',
            url: `${DOMAIN}/ToDoList/doneTask?taskName=${taskName}`
        })
    }
    rejectAPI = (taskName) => {
        return Axios({
            method: "PUT",
            url: `${DOMAIN}/ToDoList/rejectTask?taskName=${taskName}`
        })
    }
    deleteAPI = (taskName) => {
        return Axios({
            method: 'DELETE',
            url: `${DOMAIN}/ToDoList/deleteTask?taskName=${taskName}`
        })
    }
}

export const toDoListService = new ToDoListService()