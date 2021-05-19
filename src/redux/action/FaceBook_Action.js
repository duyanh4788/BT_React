import { COMMENT_HOOK } from "../Constants/FaceBook_Constant"

export const addComments = (payload) => {
    return {
        type: COMMENT_HOOK,
        payload,
    }
}