import { COURSE_DETAIL, GET_LIST_SV, LOG_IN } from "../Constants/DanhSachKhoaHoc_Const";

export const getListSV_Action = (payload) => {
  return {
    type: GET_LIST_SV,
    payload,
  };
};
export const courseDetail_Action = (payload) => {
  return {
    type: COURSE_DETAIL,
    payload,
  };
};
export const logIn_Action = (payload) => {
  return {
    type: LOG_IN,
    payload,
  }
}
