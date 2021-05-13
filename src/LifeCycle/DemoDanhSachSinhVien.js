import React, { Component } from "react";
// axios
import axios from "axios";
// child component
import ModalSinhVien from "./ModalSinhVien";
// redux
import { connect } from "react-redux";
// action
import { fetchSinhVien_Action } from "../redux/action/DanhSachSinhVien_Action";

class DemoDanhSachSinhVien extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  getApi = () => {
    const { fetchSinhVien } = this.props;
    // call api
    const promise = axios({
      url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
      method: "GET",
    });
    // xử lý
    promise.then((result) => {
      // lấy data từ backend setstate cho fontend
      fetchSinhVien(result.data);
    });
    promise.catch((error) => {
      console.log(error.response.date);
    });
  };
  renderMangSinhVien = () => {
    const { danhSachSinhVien } = this.props;
    return danhSachSinhVien.map((item, index) => {
      const {
        maSinhVien,
        tenSinhVien,
        email,
        soDienThoai,
        diemToan,
        diemLy,
        diemHoa,
        diemRenLuyen,
      } = item;
      return (
        <tr key={index}>
          <td>{maSinhVien}</td>
          <td>{tenSinhVien}</td>
          <td>{email}</td>
          <td>{soDienThoai}</td>
          <td>{diemToan}</td>
          <td>{diemLy}</td>
          <td>{diemHoa}</td>
          <td>{diemRenLuyen}</td>
          <td>
            <button className="btn btn-info">edit</button>
          </td>
          <td>
            <button className="btn btn-danger">delete</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container App">
        <h1>Danh Sách Sinh Viên</h1>
        <button
          data-toggle="modal"
          data-target="#modelId"
          className="btn btn-outline-success"
          onClick={() => {
            this.getApi();
          }}
        >
          Thêm Sinh Viên
        </button>
        <ModalSinhVien />
        <table className="table">
          <thead>
            <tr>
              <th>Mã Sinh Viên</th>
              <th>Họ Tên</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Điểm Toán</th>
              <th>Điểm Lý</th>
              <th>Điểm Hóa</th>
              <th>Điểm Cộng Thêm</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>{this.renderMangSinhVien()}</tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    this.getApi();
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachSinhVien: state.DanhSachSinhVienReducers.danhSachSinhVien,
  };
};
const mapDispacthToProps = (dispacth) => {
  return {
    fetchSinhVien: (resData) => {
      dispacth(fetchSinhVien_Action(resData));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(DemoDanhSachSinhVien);
