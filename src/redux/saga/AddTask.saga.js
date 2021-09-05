import { call, put, takeLatest } from "@redux-saga/core/effects";
import { toDoListService } from "../../BTRedux_Saga/services/todoList.service";
import { HIDEN_LOADING, SHOW_LOADING } from "../Constants/Loading.constant";

function* addTaskAPISaga(action) {
    yield put({
        type: SHOW_LOADING
    })
    try {
        console.log(action.datas);
        let { status } = yield call(() => { return toDoListService.postAPI(action.datas) })
        if (status === 201) {
            yield put({
                type: 'getTaskAPIaction'
            })
        } else {
            console.log('err');
        }

    } catch (error) {
        console.log(error);
    }
    yield put({
        type: HIDEN_LOADING
    })
}
export function* addTaskAPIAction() {
    yield takeLatest('addTaskAction', addTaskAPISaga)
}