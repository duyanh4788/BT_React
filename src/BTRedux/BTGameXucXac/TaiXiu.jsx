import React, { Component } from "react";
import XucXac from "./XucXac";
import { connect } from "react-redux";
import { chonTaiXiu_Action } from "../../redux/action/AppXucXac_Action";
import { ButtonTai, ButtonXiu } from "../../Styled_Component/styled_BTGameXucXac/button";

class TaiXiu extends Component {
  render() {
    const { btnTaiXiu } = this.props;
    return (
      <div className="row my-5">
        <div className="col-4">
          <ButtonTai onClick={() => btnTaiXiu(true)}>Tài</ButtonTai>
        </div>
        <XucXac />
        <div className="col-4">
          <ButtonXiu onClick={() => btnTaiXiu(false)}>Xỉu</ButtonXiu>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispacth) => {
  return {
    btnTaiXiu: (taixiu) => {
      dispacth(chonTaiXiu_Action(taixiu));
    },
  };
};
export default connect(null, mapDispatchToProps)(TaiXiu);
