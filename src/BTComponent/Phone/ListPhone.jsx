import React, { Component } from "react";

export class ListPhone extends Component {
  render() {
    let { phone, renderChiTiet, themGioHang } = this.props;
    return (
      <div className="card mx-auto">
        <img src={phone.hinhAnh} alt="img" width={300} />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className="card-text">{phone.gia.toLocaleString()}</p>
          <button
            className="btn btn-outline-primary"
            onClick={() => renderChiTiet(phone)}
          >
            Detail
          </button>
          <button
            className="btn btn-outline-success ml-1"
            onClick={() => themGioHang(phone)}
          >
            Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ListPhone;
