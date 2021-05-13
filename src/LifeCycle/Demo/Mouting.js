import React, { Component } from "react";
import Axios from "axios";

class Mouting extends Component {
  constructor(props) {
    // chạy khi component được gọi sẽ chạy 1 lần duy nhất và được dùng kế thừa props và khởi tạo state
    super(props); // kế thừa props từ class component
    this.state = {
      name: "vda",
      number: 1,
      danhSachPhim: [],
    };
    console.log("constructor-mouting");
  }
  componentWillMount() {
    // khởi tạo state
    console.log("componentWillMount");
  }
  renderPhim = () => {
    const { danhSachPhim } = this.state;
    return danhSachPhim.map((item, index) => {
      return (
        <div className="card col-3" key={index}>
          <img src={item.hinhAnh} width={200} alt="img" />
          <div className="card-body">
            <h4 className="card-title">{item.biDanh}</h4>
            <p className="card-text">{item.moTa}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    // chạy khi setState hoặc props & forceUpdate()
    // được dùng để chuyển jsx thành html ra giao diện
    console.log("render-mouting");
    return (
      <div className="container">
        Mouting
        <button
          onClick={() => {
            this.forceUpdate();
          }}
        >
          forceUpdate
        </button>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
  componentDidMount() {
    // chạy sau render và chỉ chạy trong mouting
    // dùng để gọi api ajax setState setInterVal setTimeOut thực hiện các tác vụ bất đồng bộ
    console.log("componentDidMount-mouting"); // gọi api ajax
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&fbclid=IwAR3NiwKlE-xhNytuKGyWwTwrvxtBz3NhvXQiYctBCB1aXueE4P-uWH4W1ag",
      method: "",
      data: "",
    })
      .then((res) => {
        this.setState({
          danhSachPhim: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Mouting;
