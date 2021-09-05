import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../BTRedux_Saga/constants/setttingSystem";
import { toDoListService } from "../../BTRedux_Saga/services/todoList.service";

function* deleteAPISaga(action) {
    const { taskId } = action
    try {
        let { status } = yield call(() => { return toDoListService.deleteAPI(taskId) })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'getTaskAPIaction'
            })
        }
    } catch (error) {
        console.log(error);
    }
}
export function* deleteAPIAction() {
    yield takeLatest("deleteTaskAction", deleteAPISaga)
}