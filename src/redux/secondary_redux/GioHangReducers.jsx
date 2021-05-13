const stateGiohang = {
  gioHang: [
    {
      "maSP": 1,
      "tenSP": "VS Phone",
      "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
      "hdh": "Android 9.0 (Pie)",
      "camT": "20 MP",
      "camS": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "6 GB",
      "hinhAnh": "./img/vsphone.jpg",
      "gia": 15000000,
      "soLuong": 1
    },
  ]
}


export const GioHangReducers = (state = stateGiohang, action) => {
  switch (action.type) {
    case "ADD_CART": {
      let gioHangUpdate = [...state.gioHang]
      let index = gioHangUpdate.findIndex(item => item.maSP === action.gioHang.maSP)
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.gioHang)
      }
      state.gioHang = gioHangUpdate
      return { ...state }
    }
    case "DELL_MSP": {
      let gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex(item => item.maSP === action.maSP);
      if (index !== -1) {
        gioHangUpdate.splice(index, 1)
      }
      state.gioHang = gioHangUpdate;
      return { ...state }
    }
    case "DELL_ID": {
      let gioHangUpdate = [...state.gioHang];
      gioHangUpdate.splice(action.index, 1)
      state.gioHang = gioHangUpdate;
      return { ...state }
    }
    case "UP_DOWN": {
      let gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex(item => item.maSP === action.maSP);
      if (action.uD) {
        gioHangUpdate[index].soLuong += 1
      } else if (gioHangUpdate[index].soLuong > 1) {
        gioHangUpdate[index].soLuong -= 1
      }
      state.gioHang = gioHangUpdate;
      return { ...state }
    }
    default: return { ...state }
  }
}