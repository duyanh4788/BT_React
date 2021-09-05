import React, { Component } from "react";
import { connect } from "react-redux";
import {
  doiHinhAnh_Action,
  doiAo_Action,
} from "../../redux/action/CauThu_Action";

class CauThu extends Component {
  hanldeChange = () => {
    const { doiHinh } = this.props;
    doiHinh();
  };
  hanldeDoiAo = () => {
    const { doiAo } = this.props;
    doiAo();
  };
  render() {
    const { ten, soAo, kyNang, tienLuong, hinhAnhM } = this.props;
    return (
      <div className="cauThu">
        <h1>
          Tên Cầu Thủ : <span>{ten}</span>
        </h1>
        <h1>
          Số Áo : <span>{soAo}</span>{" "}
        </h1>
        <button className="btn btn-success" onClick={() => this.hanldeDoiAo()}>
          Đổi số áo
        </button>
        <h1>
          Kỹ Năng :<span>{kyNang}</span>{" "}
        </h1>
        <h1>
          Tiền Lương :<span>{tienLuong}</span>{" "}
        </h1>
        <h1>
          Hình Ảnh : <br /> <img src={hinhAnhM} alt={hinhAnhM} width={300} />
        </h1>
        <button className="btn btn-success" onClick={() => this.hanldeChange()}>
          Đổi Hình
        </button>
      </div>
    );
  }
}
// chuyển đổi state trên store secondary thành props component
const mapSatateToProps = (state) => {
  const { ten, soAo, kyNang, tienLuong, hinhAnhM } = state.CauThuReducers;
  return {
    ten,
    soAo,
    kyNang,
    tienLuong,
    hinhAnhM,
  };
};
const mapDispatchToProps = (dispacth) => {
  return {
    doiHinh: () => {
      dispacth(doiHinhAnh_Action());
    },
    doiAo: () => {
      dispacth(doiAo_Action());
    },
  };
};
export default connect(mapSatateToProps, mapDispatchToProps)(CauThu);