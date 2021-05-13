import React, { Component } from 'react'

export class PlayGame extends Component {
  render() {
    const { renderRanDom } = this.props;
    return (
      <button className='btnPlayGame' onClick={() => renderRanDom()}>PlayGame</button>
    )
  }
}

export default PlayGame
