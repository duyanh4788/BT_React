import React, { Component } from "react";
import { connect } from "react-redux";
import { addSinhVien_Action } from "../redux/action/DanhSachSinhVien_Action";
import Axios from "axios";

class ModalSinhVien extends Component {
  state = {
    values: {
      maSinhVien: "",
      tenSinhVien: "",
      email: "",
      soDienThoai: "",
      diemToan: "",
      diemLy: "",
      diemHoa: "",
      diemRenLuyen: "",
    },
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    let valuesUpdate = { ...this.state.values, [name]: value };
    this.setState({
      values: valuesUpdate,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSinhVien(this.state.values);
  };
  getApi = () => {
    const promise = Axios({
      method: "POST",
      url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
    });
    promise.then((result) => {
      console.log(result.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
  renderModal = () => {
    const {
      maSinhVien,
      tenSinhVien,
      email,
      soDienThoai,
      diemToan,
      diemLy,
      diemHoa,
      diemRenLuyen,
    } = this.state.values;
    return (
      <div className="form-group text-left">
        <p>Mã Sinh Viên</p>
        <input
          type="text"
          className="form-control"
          name="maSinhVien"
          value={maSinhVien}
          onChange={this.handleChange}
        />
        <p>Tên Sinh Viên</p>
        <input
          type="text"
          className="form-control"
          name="tenSinhVien"
          value={tenSinhVien}
          onChange={this.handleChange}
        />
        <p>Email</p>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <p>Số Điện Thoại</p>
        <input
          type="text"
          className="form-control"
          name="soDienThoai"
          value={soDienThoai}
          onChange={this.handleChange}
        />
        <p>Điểm Toán</p>
        <input
          type="text"
          className="form-control"
          name="diemToan"
          value={diemToan}
          onChange={this.handleChange}
        />
        <p>Điểm Lý</p>
        <input
          type="text"
          className="form-control"
          name="diemLy"
          value={diemLy}
          onChange={this.handleChange}
        />
        <p>Điểm Hóa</p>
        <input
          type="text"
          className="form-control"
          name="diemHoa"
          value={diemHoa}
          onChange={this.handleChange}
        />
        <p>Điểm Rèn Luyện</p>
        <input
          type="text"
          className="form-control"
          name="diemRenLuyen"
          value={diemRenLuyen}
          onChange={this.handleChange}
        />
      </div>
    );
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <form onSubmit={this.handleSubmit}>
            <div className="modal-content py-5">
              <div className="modal-header">
                <h5 className="modal-title">Register</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{this.renderModal()}</div>
              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    this.getApi();
  }
}

const mapDispacthToProps = (dispacth) => {
  return {
    addSinhVien: (sinhvien) => {
      dispacth(addSinhVien_Action(sinhvien));
    },
  };
};
export default connect(null, mapDispacthToProps)(ModalSinhVien);
