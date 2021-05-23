import { GET_TASK_RFCE } from "../Constants/ToDoListAxiosRFCE_Constant"

const initalState = {
    taskList: []
}
export const ToDoListAxiosFunctionReducer = (state = initalState, action) => {
    // let taskListUpdate = [...state.taskList]
    switch (action.type) {

        case GET_TASK_RFCE: {
            state.taskList = action.payload;
            return { ...state };
        }

        // case ADD_TASK_RFCE: {
        //     taskListUpdate.push(action.payload)
        //     state.taskList = taskListUpdate;
        //     return { ...state };
        // }
        // case DELETE_TASK_RFCE: {
        //     let index = taskListUpdate.findIndex(item => item.taskName === action.payload);
        //     taskListUpdate.splice(index, 1);
        //     return { ...state, taskList: taskListUpdate };
        // }

        // case DONE_TASK_RFCE: {
        //     let index = taskListUpdate.findIndex(item => item.taskName === action.payload)
        //     if (index !== -1) {
        //         taskListUpdate[index].status = true;
        //     }
        //     state.taskList = taskListUpdate;
        //     return { ...state }
        // }

        // case REJECT_TASK_RFCE: {
        //     let index = taskListUpdate.findIndex(item => item.taskName === action.payload)
        //     if (index !== -1) {
        //         taskListUpdate[index].status = false;
        //     }
        //     state.taskList = taskListUpdate;
        //     return { ...state };
        // }
        default: return { ...state }
    }
}