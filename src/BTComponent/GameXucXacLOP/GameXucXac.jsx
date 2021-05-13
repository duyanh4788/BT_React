import React, { Component } from 'react';
import BtnTaiXiu from './BtnTaiXiu';
import './css/gameXucXac.css';
import KetQua from './KetQua'
import PlayGame from './PlayGame';

// tạo biến ranDom 
const getIntRanDom = () => {
  return Math.floor(Math.random() * 6)
}

export class GameXucXac extends Component {
  // tạo key value data
  xucXacRanDom = [
    { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
    { diem: 2, imgXucXac: './img/gameXucXac/2.png' },
    { diem: 3, imgXucXac: './img/gameXucXac/3.png' },
    { diem: 4, imgXucXac: './img/gameXucXac/4.png' },
    { diem: 5, imgXucXac: './img/gameXucXac/5.png' },
    { diem: 6, imgXucXac: './img/gameXucXac/6.png' },
  ]
  state = {
    taiXiu: false,
    soBanThang: 0,
    soBanChoi: 0,
    xucXac: [
      { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
      { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
      { diem: 1, imgXucXac: './img/gameXucXac/1.png' },
    ]
  }
  renderRanDom = () => {
    let count = 0;
    const lacXucXac = setInterval(() => {
      const xucXac = [
        this.xucXacRanDom[getIntRanDom()],
        this.xucXacRanDom[getIntRanDom()],
        this.xucXacRanDom[getIntRanDom()],
      ]
      this.setState({
        xucXac,
      })
      count++;
      if (count > 6) {
        clearInterval(lacXucXac);
        this.renderKetQua()
      }
    }, 50)
  }
  renderKetQua = () => {
    const { taiXiu, xucXac } = this.state;
    const tongDiem = xucXac.reduce((tong, item) => {
      return tong += item.diem;
    }, 0)
    console.log(tongDiem);
    let ketQuaTX;
    if (tongDiem <= 9) {
      ketQuaTX = false
    } else {
      ketQuaTX = true
    }
    if (ketQuaTX === taiXiu) {
      this.setState({
        soBanChoi: (this.state.soBanChoi += 1),
        soBanThang: (this.state.soBanThang += 1),
      })
    } else {
      this.setState({
        soBanChoi: (this.state.soBanChoi += 1),
      })
    }
  }
  // button tài xỉu
  renderBtnTaiXiu = (taixiu) => {
    this.setState({
      taiXiu: taixiu
    })
  }
  // main
  render() {
    const { taiXiu, soBanThang, soBanChoi, xucXac } = this.state;
    return (
      <div className='gameXucXac'>
        <h1 className='textGameXX'>Game Xúc Xắc</h1>
        <div className='container'>
          <BtnTaiXiu xucXac={xucXac} renderBtnTaiXiu={this.renderBtnTaiXiu} />
        </div>
        <KetQua taiXiu={taiXiu} soBanThang={soBanThang} soBanChoi={soBanChoi} />
        <div className='btnPG'>
          <PlayGame renderRanDom={this.renderRanDom} />
        </div>
      </div>
    )
  }
}

export default GameXucXac
