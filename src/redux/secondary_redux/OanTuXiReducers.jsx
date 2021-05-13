const stateOTX = {
  ketQua: '',
  soBanThang: 0,
  soBanChoi: 0,
  player: [
    { ma: "bao", imgOTX: './img/gameOnTuTI/bao.png', datCuoc: true },
    { ma: "bua", imgOTX: './img/gameOnTuTI/bua.png', datCuoc: false },
    { ma: "keo", imgOTX: './img/gameOnTuTI/keo.png', datCuoc: false },
  ],
  comPuter: { ma: "bao", imgOTX: './img/gameOnTuTI/bao.png', datCuoc: true },
}

export const OanTuXiReducers = (state = stateOTX, action) => {
  // console.log(action);
  let playerUpdate = [...state.player];
  switch (action.type) {
    case "OAN_TU_xI": {
      playerUpdate = playerUpdate.map((item, index) => {
        return { ...item, datCuoc: false }
      })
      let index = playerUpdate.findIndex(item => item.ma === action.maCuoc);
      if (index !== -1) {
        playerUpdate[index].datCuoc = true;
      } else {
        playerUpdate[index].datCuoc = false;
      }
      state.player = playerUpdate
      return { ...state }
    }
    case "RAN_DOM": {
      let ranDom = Math.floor(Math.random() * 3);
      let computerRanDom = state.player[ranDom]
      state.comPuter = computerRanDom;
      return { ...state }
    }
    case "END_GAME": {
      state.soBanChoi += 1;
      let player = state.player.find(item => item.datCuoc === true);
      let computer = state.comPuter;
      console.log(player);
      switch (player.ma) {
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hòa";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng"
            state.soBanThang += 1;
          }
          ; break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hòa";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng";
            state.soBanThang += 1;
          }
          ; break;
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng";
            state.soBanThang += 1;
          }
          ; break;
        default:
          break;
      }
      return { ...state }
    }
    default:
  }
  return { ...state }
}