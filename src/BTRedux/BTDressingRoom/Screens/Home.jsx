import React, { Component } from 'react'
import Categories from '../Components/Categories'
import Model from '../Components/Model'
import Product from '../Components/Product'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row  mt-3">
                    <div className="col-6">
                        <Categories />
                        <Product />
                    </div>
                    <div className="col-6">
                        <Model />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
