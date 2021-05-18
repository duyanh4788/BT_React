import React, { useReducer } from "react";

const initalState = [];
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex((item) => item.id === action.item.id);
      if (index !== -1) {
        cartUpdate[index].quanity += 1;
      } else {
        // const itemCart = { ...action.item, quanity: 1 };
        cartUpdate.push(action.item);
      }
      return cartUpdate;
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

let arrProduct = [
  { id: 1, name: "IPHONE 1", price: 1000, quanity: 1 },
  { id: 2, name: "IPHONE 2", price: 2000, quanity: 1 },
  { id: 3, name: "IPHONE 3", price: 3000, quanity: 1 },
];

function DemoHookUseReducer() {
  let [cart, dispatch] = useReducer(cartReducer, initalState);

  const addToCart = (item) => {
    const action = {
      type: "ADD_TO_CART",
      item,
    };
    dispatch(action);
  };
  const deleteCart = (index) => {
    const action = {
      type: "DELETE_CART",
      index,
    };
    dispatch(action);
  };
  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="card col-3" key={index}>
              <img
                className="card-img-top"
                src="https://picsum.photos/200/300"
                alt="img"
              />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price}</p>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  Add Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h1>Giỏ Hàng</h1>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quanity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quanity}</td>
                <td>{item.quanity * item.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteCart(index);
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
          <tr>
            <td colSpan="4"></td>
            <td>Tổng Tiền</td>
            <td>
              {cart.reduce((tong, item) => {
                return (tong += item.quanity * item.price);
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DemoHookUseReducer;
