import danhSachGhe from "../../data/danhSachGhe.json";
import { BOOK_GHE, DELETE_GHE } from "../Constants/BookingMovie_Constants";

const stateDanhSachGhe = {
  danhSachGhe,
  danhSachGheDaDat: [],
};

export const BookingMovieReducers = (state = stateDanhSachGhe, action) => {
  console.log(action);
  switch (action.type) {
    case BOOK_GHE: {
      let danhSachGheDaDatUpdate = [...state.danhSachGheDaDat];
      let index = danhSachGheDaDatUpdate.findIndex(
        (item) => item.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDaDatUpdate.splice(index, 1);
      } else {
        danhSachGheDaDatUpdate.push(action.ghe);
      }
      state.danhSachGheDaDat = danhSachGheDaDatUpdate;
      return { ...state };
    }
    case DELETE_GHE: {
      let danhSachGheDaDatUpdate = [...state.danhSachGheDaDat];
      let index = danhSachGheDaDatUpdate.findIndex(
        (item) => item.soGhe === action.soGhe
      );
      if (index !== -1) {
        danhSachGheDaDatUpdate.splice(index, 1);
      }
      state.danhSachGheDaDat = danhSachGheDaDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
