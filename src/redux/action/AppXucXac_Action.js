import { BTN_TAIXIU, RANDOM, TINH_DIEM } from "../Constants/AppXucXac_Constant";

export const chonTaiXiu_Action = (taixiu) => {
  return {
    type: BTN_TAIXIU,
    taixiu,
  };
};
export const ranDomXucXac_Action = () => {
  return {
    type: RANDOM,
  };
};
export const tinhDiemXucXac_Action = () => {
  return {
    type: TINH_DIEM,
  };
};
