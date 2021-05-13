import dataDressing from '../../data/dataDressingroom.json';
import { CHANGE_DRESSING, GET_TABMENU } from '../Constants/DressingRoom_Constant';

const stateDressing = {
    dataDressing,
    choseCategories: "topclothes",
    background: '',
    topclothes: '',
    botclothes: '',
    shoes: '',
    necklaces: '',
    handbags: '',
    hairstyle: '',
}

export const DressingRoomReducers = (state = stateDressing, action) => {
    switch (action.type) {
        case GET_TABMENU: {
            state.choseCategories = action.types
            return { ...state }
        }
        case CHANGE_DRESSING: {
            state[action.payload.type] = action.payload.img
            return { ...state }
        }
        default: return { ...state }
    }
}