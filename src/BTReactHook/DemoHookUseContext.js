import React, { useContext } from "react";
import { conText } from "./Context/ContextProvider";

let arrProduct = [
  { id: 1, name: "IPHONE 1", price: 1000, quanity: 1 },
  { id: 2, name: "IPHONE 2", price: 2000, quanity: 1 },
  { id: 3, name: "IPHONE 3", price: 3000, quanity: 1 },
];

function DemoHookUseContext(props) {
  let { cartReducer } = useContext(conText);
  let [cart, dispatch] = cartReducer;

  const addCart = (item) => {
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
                    addCart(item);
                  }}
                >
                  addcart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>quanity</th>
            <th>price</th>
            <th>total</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quanity}</td>
                <td>{item.price}</td>
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
                return (tong += item.price * item.quanity);
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DemoHookUseContext;
