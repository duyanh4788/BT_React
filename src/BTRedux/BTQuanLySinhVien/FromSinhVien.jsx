import React, { Component } from 'react'
import ModalFrom from './ModalFrom'
import TableFrom from './TableFrom'

class FromSinhVien extends Component {
    render() {
        return (
            <div className="container">
                <h1>From Sinh Viên</h1>
                <div className='modalFrom'>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
                    </button>
                    <ModalFrom />
                </div>
                <TableFrom />
            </div>
        )
    }
}

export default FromSinhVien
