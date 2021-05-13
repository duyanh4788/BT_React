import {
  ADD_SINHVIEN,
  GET_SINHVIEN,
} from "../Constants/DanhSachSinhVien_Constants";

const stateSinhVien = {
  danhSachSinhVien: [],
};

export const DanhSachSinhVienReducers = (state = stateSinhVien, action) => {
  let danhSachSinhVienUpdate = [...state.danhSachSinhVien]
  switch (action.type) {
    case GET_SINHVIEN: {
      danhSachSinhVienUpdate = action.resData;
      state.danhSachSinhVien = danhSachSinhVienUpdate;
      return { ...state };
    }
    case ADD_SINHVIEN: {
      danhSachSinhVienUpdate.push(action.sinhvien);
      state.danhSachSinhVien = danhSachSinhVienUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
