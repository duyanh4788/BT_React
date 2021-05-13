import React, { Component } from "react";

export class PlayGame extends Component {
  handleRandom = () => {
    let solanrender = 0;
    const { renderRamDom, renderKetQua } = this.props;
    let loop = setInterval(() => {
      renderRamDom();
      ++solanrender;
      if (solanrender > 10) {
        renderKetQua();
        clearInterval(loop);
      }
    }, 100);
   
  };
  render() {
    return (
      <button className="btnPlayGame" onClick={() => this.handleRandom()}>
        PlayGame
      </button>
    );
  }
}

export default PlayGame;
