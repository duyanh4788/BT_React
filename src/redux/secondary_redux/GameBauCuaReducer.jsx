import {
  DAT_CUOC_BC,
  PLAY_GAME_BC,
  AGAIN_GAME_BC,
} from "../Constants/GameBauCua.constant";

const initialState = {
  ListBetting: [
    { code: "bau", img: "./img/gameBauCua/bau.png", point: 0 },
    { code: "cua", img: "./img/gameBauCua/cua.png", point: 0 },
    { code: "tom", img: "./img/gameBauCua/tom.png", point: 0 },
    { code: "ca", img: "./img/gameBauCua/ca.png", point: 0 },
    { code: "ga", img: "./img/gameBauCua/ga.png", point: 0 },
    { code: "nai", img: "./img/gameBauCua/nai.png", point: 0 },
  ],
  totalPoint: 1000,
  listDice: [
    { code: "bau", img: "./img/gameBauCua/bau.png", point: 0 },
    { code: "cua", img: "./img/gameBauCua/cua.png", point: 0 },
    { code: "tom", img: "./img/gameBauCua/tom.png", point: 0 },
  ],
};

export const GameBauCuaReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case DAT_CUOC_BC: {
      let listBettingUpdate = [...state.ListBetting];
      let index = listBettingUpdate.findIndex(
        (item) => item.code === payload.code
      );
      if (index !== -1) {
        if (payload.upDown && state.totalPoint > 0) {
          listBettingUpdate[index].point += 100;
          state.totalPoint -= 100;
        } else if (!payload.upDown && listBettingUpdate[index].point > 0) {
          listBettingUpdate[index].point -= 100;
          state.totalPoint += 100;
        }
      }
      state.ListBetting = listBettingUpdate;
      return { ...state };
    }
    case PLAY_GAME_BC: {
      // random
      const arrDiceRanDom = [];
      for (let i = 0; i < 3; i++) {
        let ranDoms = Math.floor(Math.random() * 6);
        let listDiceUpdate = state.ListBetting[ranDoms];
        arrDiceRanDom.push(listDiceUpdate);
      }
      state.listDice = arrDiceRanDom;
      // xử lý kết quả duyệt từ dice
      arrDiceRanDom.forEach((diceRandom, index) => {
        let indexBest = state.ListBetting.findIndex(
          (item) => item.code === diceRandom.code
        );
        if (index !== -1) {
          state.totalPoint += state.ListBetting[indexBest].point;
        }
      });
      // xử lý hoàn tiền duyệt từ betting
      state.ListBetting.forEach((bets, index) => {
        let indexDice = arrDiceRanDom.findIndex(
          (item) => item.code === bets.code
        );
        if (indexDice !== -1) {
          state.totalPoint += bets.point;
        }
      });
      // xử lý làm mới listBettings
      state.ListBetting = state.ListBetting.map((bets, index) => {
        return { ...bets, point: 0 };
      });
      return { ...state };
    }
    case AGAIN_GAME_BC: {
      state.totalPoint = 1000;
      state.ListBetting = state.ListBetting.map((bets, index) => {
        return { ...bets, point: 0 };
      });
      return { ...state };
    }
    default:
      return state;
  }
};
