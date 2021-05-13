import { BOOK_PHIM ,  HUY_PHIM } from "../Constants/BookVe_Const";

export const bookPhim_Action = (ghe) => {
  return {
    type: BOOK_PHIM,
    ghe,
  };
};
export const huyPhim_Action = (soGhe) => {
  return {
    type: HUY_PHIM,
    soGhe,
  };
};
