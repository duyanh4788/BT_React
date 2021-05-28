import { GET_TASK_SAGA } from "../Constants/ToDoListAxiosSaga.constant"


const initialState = {
    taskList: []
}

export const ToDoListAxiosSagaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TASK_SAGA:
            state.taskList = payload
            return { ...state }
        default:
            return state
    }
}
