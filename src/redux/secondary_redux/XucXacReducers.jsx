const stateXucXac = {
    taiXiu: false,
    soBanThang: 0,
    soBanChoi: 0,
    xucXac: [
        { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
        { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
        { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
    ],
    xucXacRD: [
        { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
        { diem: 2, imgXucXac: './img/gameXucXac/2.png' },
        { diem: 3, imgXucXac: './img/gameXucXac/3.png' },
        { diem: 4, imgXucXac: './img/gameXucXac/4.png' },
        { diem: 5, imgXucXac: './img/gameXucXac/5.png' },
        { diem: 6, imgXucXac: './img/gameXucXac/6.png' },
    ]
}
const getRanDom = () => {
    return Math.floor(Math.random() * 6)
};
export const XucXacReducers = (state = stateXucXac, action) => {
    switch (action.type) {
        case "BTN_TX": {
            if (action.taixiu) {
                state.taiXiu = true
            } else {
                state.taiXiu = false
            }
            return { ...state }
        }
        case "PLAY_GAME": {
            const xucXacRanDom = [
                state.xucXacRD[getRanDom()],
                state.xucXacRD[getRanDom()],
                state.xucXacRD[getRanDom()],
            ]
            state.xucXac = xucXacRanDom
            return { ...state }
        }
        case "END_GAME": {
            state.soBanChoi += 1
            let tongDiem = state.xucXac.reduce((tong, item) => {
                return tong += item.diem;
            }, 0)
            console.log(tongDiem);
            if ((tongDiem > 11 && state.taiXiu === true) || (tongDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1
            }
            return { ...state }
        }
        default:
    }
    return { ...state }
}

/**
 * let xucXacRanDom = [];
            for (let i = 0; i < 3; i++) {
                let soRanDOm = Math.floor(Math.random() * 6) + 1;
                let mangXucXac = { diem: soRanDOm, imgXucXac: `./img/gameXucXac/${soRanDOm}.png` }
                xucXacRanDom.push(mangXucXac);
            }
            state.xucXac = xucXacRanDom
            return { ...state }
 */