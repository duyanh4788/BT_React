import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ranDomXucXac_Action,
  tinhDiemXucXac_Action,
} from "../../redux/action/AppXucXac_Action";
import { Button } from "../../Styled_Component/styled_BTGameXucXac/button";

class PlayGame extends Component {
  render() {
    const { playGame } = this.props;
    return <Button onClick={() => playGame()}>PlayGame</Button>;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let laxXucXac = setInterval(() => {
        dispatch(ranDomXucXac_Action());
        count++;
        if (count >= 6) {
          clearInterval(laxXucXac);
          dispatch(tinhDiemXucXac_Action());
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(PlayGame);
