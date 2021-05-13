import React, { Component } from 'react';
import './css/style.css';
import { connect } from 'react-redux';

class Hamburger extends Component {
  renderMixer = () => {
    const { burger } = this.props
    console.log(burger);
    let contentOne = [];
    for (let propsBurger in burger) {
      let contentTwo = [];
      for (let i = 0; i < burger[propsBurger]; i++) {
        contentTwo.push(<div key={i} className={propsBurger}></div>)
      }
      contentOne.push(contentTwo)
    }
    return contentOne
  }
  renderMenu = () => {
    const { burger, price, upDown } = this.props
    return Object.entries(price).map(([propsBurger, amount], index) => {
      return (
        <tr key={index}>
          <td>{propsBurger}</td>
          <td>
            <button className="btn border mr-2" onClick={() => upDown(propsBurger, -1)}>-</button>
            {burger[propsBurger]}
            <button className="btn border ml-2" onClick={() => upDown(propsBurger, 1)}>+</button>
          </td>
          <td>{amount} $</td>
          <td>{burger[propsBurger] * amount} $</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-success my-5'>Hamburger Select Option</h1>
        <div className="row">
          <div className="col-6">
            <h1 className='text-success my-5'>Hamburger</h1>
            <div className='breadTop'></div>
            {this.renderMixer()}
            <div className='breadBottom'></div>
          </div>
          <div className="col-6">
            <h1 className='text-success my-5'>Select Option</h1>
            <table className='table'>
              <thead>
                <tr>
                  <th>Món Ăn</th>
                  <th> - or + </th>
                  <th>Giá</th>
                  <th>Thành Tiền</th>
                </tr>
              </thead>
              <tbody>
                {this.renderMenu()}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan='2'></td>
                  <td>Tổng Tiền : </td>
                  <td>{this.props.total} $</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    burger: state.HambergerReducers.burger,
    price: state.HambergerReducers.price,
    total: state.HambergerReducers.total,
  }
}
const mapDispatchToProps = dispacth => {
  return {
    upDown: (propsBurger, uD) => {
      const action = {
        type: "UPDOWN_BURGER",
        propsBurger,
        uD,
      }
      dispacth(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)


// dùng hàm map
// return Object.entries(burger).map(([propsBuger, value], index) => {
//   let contetnBurger = [];
//   for (let i = 0; i < value; i++) {
//     contetnBurger.push(<div key={i} className={propsBuger}></div>);
//   }
//   return contetnBurger;
// });
