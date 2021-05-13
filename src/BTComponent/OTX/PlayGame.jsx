import React, { Component } from "react";

export class PlayGame extends Component {
  render() {
    const { renderComputer } = this.props;
    return (
      <button className="btn btnPlayGame" onClick={() => renderComputer()}>
        PlayGame
      </button>
    );
  }
}

export default PlayGame;
