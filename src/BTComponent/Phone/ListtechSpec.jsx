import React, { Component } from "react";
import PhoneData from "../data/Phonedata.json";
import ListPhone from "./ListPhone";

export class ListtechSpec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPhone: PhoneData[0],
    };
  }
  renderListPhone = () => {
    return PhoneData.map((phone, index) => {
      return (
        <ListPhone
          key={index}
          phone={phone}
          renderChiTiet={this.renderChiTiet}
          themGioHang={this.props.themGioHang}
        />
      );
    });
  };
  renderChiTiet = (phone) => {
    this.setState({
      listPhone: phone,
    });
  };
  render() {
    const {
      manHinh,
      hdh,
      camT,
      camS,
      ram,
      rom,
      hinhAnh,
    } = this.state.listPhone;
    return (
      <div className="listPhone">
        <div className="row">{this.renderListPhone()}</div>
        <div className="listTech">
          <h1>Thông Số Kĩ Thuật</h1>
          <div className="row">
            <div className="col-4">
              <img src={hinhAnh} alt="img" width={300} />
            </div>
            <div className="col-8">
              <table className="table text-left">
                <thead>
                  <tr>
                    <th>Màn Hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{hdh}</th>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <th>{camT}</th>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <th>{camS}</th>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListtechSpec;
