import {
  COURSE_DETAIL,
  GET_LIST_SV,
  LOG_IN,
} from "../Constants/DanhSachKhoaHoc_Const";

const stateDanhSachKhoaHoc = {
  danhSachKhoaHoc: [],
  courseDetail: null,
  credential: null,
};
export const DanhSachKhoaHocReducers = (
  state = stateDanhSachKhoaHoc,
  action
) => {
  switch (action.type) {
    case GET_LIST_SV: {
      state.danhSachKhoaHoc = action.payload;
      return { ...state };
    }
    case COURSE_DETAIL: {
      state.courseDetail = action.payload;
      return { ...state };
    }
    case LOG_IN: {
      state.credential = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
