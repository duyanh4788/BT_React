import { all } from 'redux-saga/effects'
import * as getTaskSaga from './getTask.saga'
import * as addTaskSaga from './AddTask.saga'
import * as doneTaskSaga from './DoneRejectTask.saga'
import * as rejectTaskSaga from './DoneRejectTask.saga'
import * as deleteTaskSaga from './deleteTask.saga'
// redux có 2 loại action 
// action 1 : trả về 1 object thông thường
// action 2 : trả  về 1 function ( dùng để xử lý 1 apc hoặc action khác )



export function* rootSaga() {
    yield all([
        getTaskSaga.getTaskAPISAction(),
        addTaskSaga.addTaskAPIAction(),
        doneTaskSaga.doneTaskAPIAction(),
        rejectTaskSaga.rejectTaskAPIAction(),
        deleteTaskSaga.deleteAPIAction(),
    ])
}