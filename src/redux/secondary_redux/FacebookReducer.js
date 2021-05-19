import { COMMENT_HOOK } from "../Constants/FaceBook_Constant";

const initalState = {
    commment: [
        { name: 'a', conntent: 'hi a', avata: 'https://i.pravatar.cc/300' },
        { name: 'b', conntent: 'hi b', avata: 'https://i.pravatar.cc/400' },
        { name: 'c', conntent: 'hi c', avata: 'https://i.pravatar.cc/500' },
    ]
}

export const FacebookReducer = (state = initalState, action) => {
    switch (action.type) {
        case COMMENT_HOOK: {
            let commentUpdate = [...state.commment]
            commentUpdate.push(action.payload);
            state.commment = commentUpdate;
            return { ...state }
        }
        default: return { ...state }
    }
}