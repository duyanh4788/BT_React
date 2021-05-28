import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { toDoListService } from '../../BTRedux_Saga/services/todoList.service'
import { HIDEN_LOADING, SHOW_LOADING } from '../Constants/Loading.constant'
import { STATUS_CODE } from '../../BTRedux_Saga/constants/setttingSystem'
import { GET_TASK_SAGA } from '../Constants/ToDoListAxiosSaga.constant'

function* getTaskAPISaga(action) {
    yield put({
        type: SHOW_LOADING,
    })
    try {
        let { data, status } = yield call(toDoListService.getAPI)
        yield delay(500)
        if (status === STATUS_CODE.SUCCESS) {
            // sau khi lấy giá trị từ api dùng hàm put ( dispatch thunk)
            yield put({
                type: GET_TASK_SAGA,
                payload: data,
            })
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
    yield put({
        type: HIDEN_LOADING
    })
}

export function* getTaskAPISAction() {
    yield takeLatest('getTaskAPIaction', getTaskAPISaga)
}