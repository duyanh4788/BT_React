import { BOOK_GHE, DELETE_GHE } from '../Constants/BookingMovie_Constants';

export const BookingMovie_Action = (ghe) => {
    return {
        type: BOOK_GHE,
        ghe
    }
}
export const deleteMovie_Action = (soGhe) => {
    return {
        type: DELETE_GHE,
        soGhe
    }
}