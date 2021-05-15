import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    const { taiXiu, soBanThang, soBanChoi } = this.props;
    return (
      <div className="ketQua">
        <p className="textIntro">
          Bạn Chọn :{" "}
          <span className="textKetQua">{taiXiu ? "Tài" : "Xỉu"}</span>
        </p>
        <p className="textIntro">
          Số Bàn Thắng : <span className="textKetQua">{soBanThang}</span>
        </p>
        <p className="textIntro">
          Số Bàn Chơi : <span className="textKetQua">{soBanChoi}</span>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taiXiu: state.AppXucXacReducers.dataXucXac.taiXiu,
    soBanThang: state.AppXucXacReducers.dataXucXac.soBanThang,
    soBanChoi: state.AppXucXacReducers.dataXucXac.soBanChoi,
  };
};
export default connect(mapStateToProps, null)(KetQua);
