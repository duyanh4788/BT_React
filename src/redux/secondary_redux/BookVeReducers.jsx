import dataHangGhe from "../../data/danhSachGhe.json";
import { BOOK_PHIM, HUY_PHIM } from "../Constants/BookVe_Const";

const stateHangGhe = {
  dataHangGhe,
  danhSachDatGhe: [],
};

export const BookVeReducers = (state = stateHangGhe, action) => {
  switch (action.type) {
    case BOOK_PHIM: {
      let danhSachGheDaDatUpdate = [...state.danhSachDatGhe];
      let index = danhSachGheDaDatUpdate.findIndex(
        (item) => item.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDaDatUpdate.splice(index, 1);
      } else {
        danhSachGheDaDatUpdate.push(action.ghe);
      }
      state.danhSachDatGhe = danhSachGheDaDatUpdate;
      return { ...state };
    }
    case HUY_PHIM: {
      let danhSachGheDaDatUpdate = [...state.danhSachDatGhe];
      let index = danhSachGheDaDatUpdate.findIndex(
        (item) => item.soGhe === action.soGhe
      );
      danhSachGheDaDatUpdate.splice(index, 1);
      state.danhSachDatGhe = danhSachGheDaDatUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
