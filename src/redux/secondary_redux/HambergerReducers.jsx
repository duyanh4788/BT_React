const stateBurger = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  price: { salad: 10, cheese: 10, beef: 10 },
  total: 40,
};

export const HambergerReducers = (state = stateBurger, action) => {
  switch (action.type) {
    case "UPDOWN_BURGER": {
      const { propsBurger, uD } = action;
      if (uD === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += uD;
      state.burger = burgerUpdate;
      state.total += state.price[propsBurger] * uD;
      return state;
    }
    default:
      return state;
  }
};
