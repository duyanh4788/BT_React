import React, { Component } from 'react'
import XucXac from './XucXac';

export class BtnTaiXiu extends Component {

  render() {
    const { xucXac, renderBtnTaiXiu } = this.props;
    return (
      <div className="row">
        <div className="col-4">
          <button className='btnTX Tai' onClick={() => renderBtnTaiXiu(true)}>Tài</button>
        </div>
        <XucXac xucXac={xucXac} />
        <div className="col-4">
          <button className='btnTX Xiu' onClick={() => renderBtnTaiXiu(false)}>Xỉu</button>
        </div>
      </div>
    )
  }
}

export default BtnTaiXiu
