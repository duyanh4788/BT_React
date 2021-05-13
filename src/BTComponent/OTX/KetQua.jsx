import React, { Component } from "react";

export class KetQua extends Component {
  render() {
    const { ketQua, soBanThang, soBanChoi } = this.props;
    return (
      <div className="ketQua">
          <p className="textKetQua">
            Kết Quả : <span className="text-danger">{ketQua}</span>
          </p>
          <p className="textKetQua">
            Số Bàn Thắng: <span className="text-primary">{soBanThang}</span>
          </p>
          <p className="textKetQua">
            Số Bàn Chơi : <span className="text-warning">{soBanChoi}</span>
          </p>
        </div>
    );
  }
}

export default KetQua;
