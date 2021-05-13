import React, { Component } from "react";

export class KetQua extends Component {
  render() {
    const { taiXiu, soBanThang, soBanChoi } = this.props;
    return (
      <div className="ketQua">
        <p className="textGameLabel">
          Bạn Chọn :{" "}
          <span className="text-danger">{taiXiu ? "Tài" : "Xỉu"}</span>
        </p>
        <p className="textGameLabel">
          Số Bàn Thắng : <span className="text-primary">{soBanThang}</span>
        </p>
        <p className="textGameLabel">
          Số Bàn Chơi : <span className="text-warning">{soBanChoi}</span>
        </p>
      </div>
    );
  }
}

export default KetQua;
