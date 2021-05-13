import {
  CHANGE_DRESSING,
  GET_TABMENU,
} from "../Constants/DressingRoom_Constant";

export const getTabMenu_Action = (types) => {
  return {
    type: GET_TABMENU,
    types,
  };
};
export const changeDressing_Action = (cloth) => {
  return {
    type: CHANGE_DRESSING,
    payload: {
      type: cloth.type,
      img: cloth.imgSrc_png,
    },
  };
};
