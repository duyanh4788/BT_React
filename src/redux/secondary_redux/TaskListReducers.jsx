import { ToDoList_PirmaryThemes } from "../../Styled_Component/ToDoList_Themes/ToDoList_PirmaryThemes";
import { ListThemes } from "../../Styled_Component/ToDoList_Themes/ToDoList_ManagerThemes"
import { ADD_TASK_LIST, CHANGE_THEMES_TL, DONE_TODO_TL, DONE_COMPLTE_TL, DELL_TASKLIST, EDIT_TASKLIST, UPDATE_TASKLIST } from "../Constants/Task_Const"


const stateTaskList = {
    themesToDoList: ToDoList_PirmaryThemes,
    taskList: [],
    taskEdit: { id: "-1", taskName: '', done: true },
}

export const TaskListReducers = (state = stateTaskList, action) => {
    let taskListkUpdate = [...state.taskList]
    switch (action.type) {
        case ADD_TASK_LIST: {
            if (action.newTaskName === "") {
                alert(" (*) Do Not Empty ! ")
                return { ...state }
            }
            let index = taskListkUpdate.findIndex(task => task.taskName === action.newTaskName)
            if (index !== -1) {
                alert(" (*) Task Name Alredy Exit ! ")
                return { ...state }
            }
            let newAddTask = {
                id: Date.now(),
                taskName: action.newTaskName,
                done: true,
            }
            taskListkUpdate.push(newAddTask)
            state.taskList = taskListkUpdate
            return { ...state }
        }
        case CHANGE_THEMES_TL: {
            let changeThemes = ListThemes.find(item => item.id.toString() === action.themes.toString())
            if (changeThemes) {
                state.themesToDoList = changeThemes.theme;
            }
            return { ...state }
        }
        case DONE_TODO_TL: {
            let index = taskListkUpdate.findIndex(item => item.done === action.done);
            if (index !== -1) {
                taskListkUpdate[index].done = false;
            }
            state.taskList = taskListkUpdate
            return { ...state }
        }
        case DONE_COMPLTE_TL: {
            let index = taskListkUpdate.findIndex(item => item.done === action.done)
            if (index !== -1) {
                taskListkUpdate[index].done = true;
            }
            state.taskList = taskListkUpdate
            return { ...state }
        } case DELL_TASKLIST: {
            return { ...state, taskList: state.taskList.filter(item => item.id !== action.id) }
        }
        case EDIT_TASKLIST: {
            return { ...state, taskEdit: action.taskName }
        }
        case UPDATE_TASKLIST: {
            state.taskEdit = { ...state.taskEdit, taskName: action.taskName }
            let index = taskListkUpdate.findIndex(item => item.id === state.taskEdit.id)
            if (index !== -1) {
                taskListkUpdate[index] = state.taskEdit
            }
            state.taskList = taskListkUpdate
            state.taskEdit = { id: "-1", taskName: "", done: false }
            return { ...state }
        }
        default: return { ...state }
    }
}