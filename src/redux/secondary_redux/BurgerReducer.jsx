const stateBurger = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  price: { salad: 10, cheese: 10, beef: 10 },
  total: 10,
};
export const BurgerReducer = (state = stateBurger, action) => {
  switch (action.type) {
    case "THEM_BURGER": {
      const { propsBurger, upDown } = action;
      if (upDown === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += upDown;
      state.burger = burgerUpdate;
      state.total += state.price[propsBurger] * upDown;
      return state;
    }
    default: return state;
  }
};
