import React, { Component } from 'react';
import "./css/style.css";
import Player from './Player';
import KetQua from './KetQua';
import Computer from './Computer';
import PlayGame from './PlayGame';


class GameOTX extends Component {
    render() {
        return (
            <div className='gameOTX'>
                <h1 className='text textHead'>Game Oẳn Tù Xì</h1>
                <div className="row">
                    <Player />
                    <KetQua />
                    <Computer />
                </div>
                <PlayGame />
            </div>
        )
    }
}

export default GameOTX
