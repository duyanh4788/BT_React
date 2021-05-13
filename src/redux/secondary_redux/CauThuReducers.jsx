import { DOI_HINH_ANH, DOI_AO } from "../Constants/CauThu_Const";

const initialState = {
  ten: "vuduyanh",
  soAo: 1,
  kyNang: "đá bóng",
  tienLuong: 100,
  hinhAnhM:
    "https://lh3.googleusercontent.com/proxy/3zXMnlM6wqk-fLSctjgF7MUBxGNjV5xjSQCSA57EViOPTdwfV4uCiNllQBKq6ojiugYiSUdqR8JTdC-M28QeNMw3AklVoVtGS3Quon99FZmiBfS72OiQzU3JUz4",
  hinhAnhH:
    "https://thumbs.dreamstime.com/z/woman-listening-to-music-hi-fi-stereo-home-woman-listening-to-music-hi-fi-stereo-132615028.jpg",
};
export const CauThuReducers = (state = initialState, action) => {
  switch (action.type) {
    case DOI_HINH_ANH: {
      let doihinhM = { ...state.hinhAnhM };
      let doihinhH = { ...state.hinhAnhH };
      doihinhM = state.hinhAnhH;
      doihinhH = state.hinhAnhM;
      state.hinhAnhM = doihinhM;
      state.hinhAnhH = doihinhH;
      /*tính bất biến của redux , 
       nên khi thay đổi giá trị phải tạo 
      1 biến mới và gán bằng biến cũ
      */
      return { ...state };
    }
    case DOI_AO: {
      let soAoMoi = 13;
      state.soAo = soAoMoi;
      return state;
    }
    default:
      return state;
  }
};
