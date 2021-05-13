import React, { Component } from 'react'

export class XucXac extends Component {
  renderXucXac = () => {
    const { xucXac } = this.props;
    return xucXac.map((item, index) => {
      return (
        <img className='ml-1' key={index} src={item.imgXucXac} alt={item.imgXucXac} width={50} />
      )
    })
  }
  render() {
    return (
      <div className="col-4">
        {this.renderXucXac()}
      </div>
    )
  }
}

export default XucXac
