const stateFromSV = {
    sinhVien: []
}

export const FromReducers = (state = stateFromSV, action) => {
    switch (action.type) {
        case "THEM_SV": {
            let sinhVienUpdate = [...state.sinhVien, action.sinhVien];
            state.sinhVien = sinhVienUpdate;
            return state
        }
        case "XOA_SV": {
            let sinhVienUpdate = [...state.sinhVien];
            let index = sinhVienUpdate.find(item => item.maSV === action.maSV);
            if (index) {
                sinhVienUpdate.splice(index, 1)
            }
            state.sinhVien = sinhVienUpdate;
            return state
        }
        case "EDIT_SV": {
            let sinhVienUpdate = [...state.sinhVien];
            sinhVienUpdate = action.editSV;
            state.sinhVien = sinhVienUpdate;
            return { ...state }
        }
        default: return state
    }
}