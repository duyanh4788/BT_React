import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="text-center">
                                <img src="./img//dressingroom/cybersoft.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">
                                    CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                                    - Virtual Dressing Room
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header
