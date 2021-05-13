import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PlayGame extends Component {
    render() {
        const { playGame } = this.props;
        return (
            <button className="btnPlayGame" onClick={() => playGame()}>PlayGame</button>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            let lacXucXac = setInterval(() => {
                const action = {
                    type: "PLAY_GAME",
                }
                dispatch(action)
                count++;
                if (count > 6) {
                    clearInterval(lacXucXac)
                    dispatch({
                        type: "END_GAME",
                    })
                }
            }, 100)
        }
    }
}
export default connect(null, mapDispatchToProps)(PlayGame)