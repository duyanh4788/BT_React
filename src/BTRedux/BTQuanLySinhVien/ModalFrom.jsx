import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ModalFrom extends Component {
    state = {
        values: {
            maSV: '',
            tenSV: '',
            phone: '',
            email: '',
        },
        errorrs: {
            maSV: '',
            tenSV: '',
            phone: '',
            email: '',
        },
        valid: false
    }
    renderRegister = () => {
        const { maSV, tenSV, phone, email } = this.state.values;
        return (
            <div className="modal-body text-left font-weight-bold">
                <h6>Mã Sinh Viên</h6>
                <input type="number" pattern='^[0-9]+$' className="form-control" name="maSV" value={maSV} onChange={this.hanldeOnChange} />
                <span className="text-danger">{this.state.errorrs.maSV}</span>
                <h6>Tên Sinh Viên</h6>
                <input type="text" pattern='^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$'
                    className="form-control" name="tenSV" value={tenSV} onChange={this.hanldeOnChange} />
                <span className="text-danger">{this.state.errorrs.tenSV}</span>
                <h6>Phone</h6>
                <input type="number" pattern='^[0-9]+$' className="form-control" name="phone" value={phone} onChange={this.hanldeOnChange} />
                <span className="text-danger">{this.state.errorrs.phone}</span>
                <h6>Email</h6>
                <input type="email" pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' className="form-control" name="email" value={email} onChange={this.hanldeOnChange} />
                <span className="text-danger">{this.state.errorrs.email}</span>
            </div>
        )
    }
    hanldeOnChange = (e) => {
        let tagInput = e.target;
        const { name, value, type, pattern } = tagInput
        let errorMesage = ''
        let regex = new RegExp(pattern)
        if (value.trim() === '') {
            errorMesage = name + " Trống !!! "
        }
        if (type === "email") {
            if (!regex.test(value)) {
                errorMesage = name + " không đúng định dạng !!! "
            }
        }
        if (type === "number") {
            if (!regex.test(value)) {
                errorMesage = name + " Nhập Số !!! "
            }
        }
        if (type === "text") {
            if (!regex.test(value)) {
                errorMesage = name + " Nhập Chữ !!! "
            }
        }
        let values = { ...this.state.values, [name]: value };
        let errorrs = { ...this.state.errorrs, [name]: errorMesage };
        this.setState({
            ...this.state,
            values: values,
            errorrs: errorrs,
        }, () => {
            this.checkVaild()
            this.refeshInput()
        })
    }
    hanldeSubmit = (e) => {
        e.preventDefault();
        this.props.themSinhVien(this.state.values);
        document.getElementById('closeFrom').click();
        this.refeshInput()
    }
    checkVaild = () => {
        let valid = true;
        for (let key in this.state.errorrs) {
            if (this.state.errorrs[key] !== '' || this.state.values[key] === '') {
                valid = false
            }
        }
        this.setState({
            ...this.state,
            valid: valid,
        })
    }
    refeshInput = () => {
        let elementsInput = document.querySelectorAll("input");
        for (let refesh of elementsInput) {
            refesh.value = ''
        }
    }
    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content py-3">
                        <form onSubmit={this.hanldeSubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title">From Đăng Kí</h5>
                                <button type="button" id='closeFrom' className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            {this.renderRegister()}
                            <div className="text-center">
                                {this.state.valid ? <button type='submit' className='btn btn-primary'>Submit</button> : <button type='submit' className='btn btn-primary' disabled>Submit</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type: "THEM_SV",
                sinhVien
            }
            dispatch(action)
        }
    }
}
export default connect(null, mapDispacthToProps)(ModalFrom)
