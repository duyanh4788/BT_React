import React, { Component } from 'react';
import './css/style.css';
import TaiXiu from './TaiXiu';
import KetQua from './KetQua';
import PlayGame from './PlayGame';

class GameXucXac extends Component {
    render() {
        return (
            <div className='gameXucXac'>
                <h1 className='my-5'>Game Xúc Xắc</h1>
                <TaiXiu />
                <KetQua />
                <div className="playGame">
                    <PlayGame />
                </div>
            </div>
        )
    }
}

export default GameXucXac
