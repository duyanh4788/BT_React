import dataXucXac from "../../BTRedux/BTGameXucXac/data/dataXucXac.json";
import { BTN_TAIXIU, RANDOM, TINH_DIEM } from "../Constants/AppXucXac_Constant";

const stateXucXac = { dataXucXac };
const itemRanDom = () => {
  return Math.floor(Math.random() * 6);
};
export const AppXucXacReducers = (state = stateXucXac, action) => {
  switch (action.type) {
    case BTN_TAIXIU: {
      state.dataXucXac.taiXiu = action.taixiu;
      return { ...state };
    }
    case RANDOM: {
      const xucXacRanDom = [
        state.dataXucXac.xucXacRanDom[itemRanDom()],
        state.dataXucXac.xucXacRanDom[itemRanDom()],
        state.dataXucXac.xucXacRanDom[itemRanDom()],
      ];
      state.dataXucXac.xucXac = xucXacRanDom;
      return { ...state };
    }
    case TINH_DIEM: {
      state.dataXucXac.soBanChoi += 1;
      let tongDiem = state.dataXucXac.xucXac.reduce((tong, item) => {
        return (tong += item.diem);
      }, 0);
      console.log(tongDiem);
      if (
        (tongDiem > 11 && state.dataXucXac.taiXiu === true) ||
        (tongDiem <= 11 && state.dataXucXac.taiXiu === false)
      ) {
        state.dataXucXac.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
