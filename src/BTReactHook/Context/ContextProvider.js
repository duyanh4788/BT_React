import React, { useReducer } from "react";

export const conText = React.createContext();
const initalState = [];
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex((item) => item.id === action.item.id);
      if (index !== -1) {
        cartUpdate[index].quanity += 1;
        return [...state];
      }
      //   else {
      //     // let itemUpdate = { ...action.item, quanity: 1 };
      //     cartUpdate.push(action.item);
      //   }
      return [...state, { ...action.item, quanity: 1 }];
    }
    case "DELETE_CART": {
      let cartUpdate = [...state];
      cartUpdate.splice(action.index, 1);
      return cartUpdate;
    }
    default:
      return [...state];
  }
};

function ContextProvider(props) {
  let [cart, dispatch] = useReducer(cartReducer, initalState);
  // dùng context bao tất cả component bên trong
  const store = {
    cartReducer: [cart, dispatch],
  };
  return <conText.Provider value={store}>{props.children}</conText.Provider>;
}

export default ContextProvider;
