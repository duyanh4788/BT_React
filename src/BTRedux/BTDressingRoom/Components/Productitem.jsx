import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDressing_Action } from '../../../redux/action/DressingRoom_Action';

class Productitem extends Component {
    render() {
        const { item, changeDressing } = this.props
        return (
            <div className="card p-2 my-2">
                <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} height={320} />
                <p>{item.name} </p>
                <button className='btn btn-success' onClick={() => { changeDressing(item) }}>Thử Đồ</button>
            </div>
        )
    }
}

const mapDispacthToProps = dispacth => {
    return {
        changeDressing: (item) => {
            dispacth(changeDressing_Action(item))
        }
    }
}
export default connect(null, mapDispacthToProps)(Productitem)
