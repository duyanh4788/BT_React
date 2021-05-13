import dataPhone from "../../data/Phonedata.json";

const stateGioHang = {
  dataPhone,
  gioHangModal: [],
  techSpech: dataPhone[0],
};

export const GioHan2Reducers = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GH": {
      let gioHangUpdate = [...state.gioHangModal];
      let index = gioHangUpdate.findIndex(
        (item) => item.maSP === action.spGiohang.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGiohang);
      }
      state.gioHangModal = gioHangUpdate;
      return state;
    }
    case "XOA_GH": {
      let gioHangUpdate = [...state.gioHangModal];
      gioHangUpdate.splice(action.index, 1);
      state.gioHangModal = gioHangUpdate;
      return state;
    }
    case "UD_GIOHANG": {
      let gioHangUpdate = [...state.gioHangModal];
      let index = gioHangUpdate.findIndex((item) => item.maSP === action.maSP);
      if (action.uD) {
        gioHangUpdate[index].soLuong += 1;
      } else if (gioHangUpdate[index].soLuong > 1) {
        gioHangUpdate[index].soLuong -= 1;
      }
      state.gioHangModal = gioHangUpdate;
      return state;
    }
    case "DETAIL_2": {
      state.techSpech = action.sanPham;
      return state;
    }
    default:
      return { ...state };
  }
};
