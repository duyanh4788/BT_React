import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTabMenu_Action } from '../../../redux/action/DressingRoom_Action';

class Categories extends Component {
    render() {
        const { cateGories, topClothes, choseCategories } = this.props;
        return (
            <div className='btn-group my-3'>
                {cateGories.map((item, index) => {
                    return <button key={index}
                        onClick={() => topClothes(item.type)}
                        className={choseCategories === item.type ? 'btn btn-success mx-1 rounded' : 'btn btn-secondary mx-1 rounded'}>{item.showName}</button>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cateGories: state.DressingRoomReducers.dataDressing.navPills,
        choseCategories: state.DressingRoomReducers.choseCategories,
    }
}
const mapDispacthToProps = (dispacth) => {
    return {
        topClothes: (type) => {
            dispacth(getTabMenu_Action(type))
        }
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(Categories)
