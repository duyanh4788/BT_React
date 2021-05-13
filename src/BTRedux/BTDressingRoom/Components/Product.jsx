import React, { Component } from 'react'
import Productitem from './Productitem';
import { connect } from 'react-redux';

class Product extends Component {
    render() {
        const { choseCategories, productList } = this.props;
        return (
            <div className="row">
                {productList.filter(item => item.type === choseCategories).map((item, index) => {
                    return <div className="col-4" key={index} ><Productitem item={item} />
                    </div>
                })}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        productList: state.DressingRoomReducers.dataDressing.tabPanes,
        choseCategories: state.DressingRoomReducers.choseCategories,
    }
}
export default connect(mapStateToProps, null)(Product)
