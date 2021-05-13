import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TableFrom extends Component {
    renderTable = () => {
        const { sinhVien, xoaSinhVien, suaSinhVien } = this.props;
        return sinhVien.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maSV}</td>
                    <td>{item.tenSV}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => xoaSinhVien(item.maSV)}>delete</button>
                        <button className='btn btn-info ml-1' data-toggle="modal" data-target="#modelId" onClick={() => suaSinhVien(item)}>edit</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <table className='table my-5'>
                <thead>
                    <tr>
                        <th>Mã Sinh Viên</th>
                        <th>Tên Sinh Viên</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sinhVien: state.FromReducers.sinhVien
    }
}
const mapDispacthToProps = dispatch => {
    return {
        xoaSinhVien: (maSV) => {
            const action = {
                type: "XOA_SV",
                maSV
            }
            dispatch(action)
        },
        suaSinhVien: (sinhVien) => {
            const editSV = {
                maSV: sinhVien.maSV,
                tenSV: sinhVien.tenSV,
                phone: sinhVien.phone,
                email: sinhVien.email,
            }
            const action = {
                type: "EDIT_SV",
                editSV,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(TableFrom)
