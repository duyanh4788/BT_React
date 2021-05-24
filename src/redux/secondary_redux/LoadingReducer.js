import { HIDEN_LOADING, SHOW_LOADING } from "../Constants/Loading.constant"

const initialState = {
    isLoading: false
}

export const LoadingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_LOADING: {
            state.isLoading = true
            return { ...state, ...payload }
        }
        case HIDEN_LOADING: {
            state.isLoading = false
            return { ...state, ...payload }
        }
        default:
            return state
    }
}
