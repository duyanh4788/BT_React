import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PlayGame extends Component {
    render() {
        const { playGame } = this.props;
        return (
            <button className="btnPlayGame" onClick={() => playGame()}>playgame</button>
        )
    }
}
const mapDispachtToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            let ranDom = setInterval(() => {
                const action = {
                    type: "RAN_DOM",
                }
                dispatch(action)
                count++
                if (count > 6) {
                    clearInterval(ranDom);
                    const action = {
                        type: "END_GAME",
                    }
                    dispatch(action)
                }
            }, 100)

        }
    }
}
export default connect(null, mapDispachtToProps)(PlayGame)
