import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../BTRedux_Saga/constants/setttingSystem";
import { toDoListService } from "../../BTRedux_Saga/services/todoList.service";


function* doneTaskAPISaga(action) {
    const { items } = action
    try {
        const { data, status } = yield call(() => { return toDoListService.doneAPI(items) })
        console.log(data);
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'getTaskAPIaction'
            })
        } else {
            console.log('error');
        }
    } catch (error) {
        console.log(error);
    }
}
export function* doneTaskAPIAction() {
    yield takeLatest("doneTaskAction", doneTaskAPISaga)
}

function* rejectTaskAPISaga(action) {
    const { items } = action
    try {
        let { status } = yield call(() => { return toDoListService.rejectAPI(items) })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: "getTaskAPIaction"
            })
        } else {
            console.log('error');
        }
    } catch (error) {
        console.log(error);
    }

}
export function* rejectTaskAPIAction() {
    yield takeLatest("rejectTaskAction", rejectTaskAPISaga)
}