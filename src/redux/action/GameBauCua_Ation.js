import { AGAIN_GAME_BC, DAT_CUOC_BC, PLAY_GAME_BC } from "../Constants/GameBauCua.constant"

export const datCuocAction = (payload, upDown) => {
    return {
        type: DAT_CUOC_BC,
        payload,
        upDown,
    }
}
export const playGameAction = () => {
    return {
        type: PLAY_GAME_BC,
    }
}
export const againGameAction = () => {
    return {
        type: AGAIN_GAME_BC
    }
}