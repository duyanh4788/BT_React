import { applyMiddleware, compose, createStore } from "redux";
import { rootReducers } from "./main_redux/rootReducers";
// middleware thunk
import reduxThunk from 'redux-thunk'
// middleware saga
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './saga/rootSaga'
const middleWareSaga = createMiddleWareSaga()
// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(reduxThunk, middleWareSaga)))

// run saga
middleWareSaga.run(rootSaga)

export default store