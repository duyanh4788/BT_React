import React, { Component } from 'react'
import './style.css';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


class UserProfile extends Component {
    state = {
        values: {
            fistName: '',
            lastName: '',
            userName: '',
            eMail: '',
            passWord: '',
            passWordConfirm: '',
        },
        errors: {
            fistName: '',
            lastName: '',
            userName: '',
            eMail: '',
            passWord: '',
            passWordConfirm: '',
        }
    }

    handleChange = (event) => {
        const { name, value, type, pattern } = event.target;
        let valuesUpdate = { ...this.state.values, [name]: value }
        let errorrUpdate = { ...this.state.errors }

        let regex = new RegExp(pattern)
        // rỗng
        if (value.trim() === "") {
            errorrUpdate[name] = name + " is required "
        } else {
            errorrUpdate[name] = "";
        }
        // email
        if (type === 'email') {
            if (!regex.test(value)) {
                errorrUpdate[name] = " Email Invaild "
            } else {
                errorrUpdate[name] = "";
            }
        }
        // password
        if (name === 'passWordConfirm') {
            if (value === valuesUpdate['passWord']) {
                errorrUpdate[name] = ""
            } else {
                errorrUpdate[name] = " Password Invaild "
            }
        }
        this.setState({
            values: valuesUpdate,
            errors: errorrUpdate,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { values, errors } = this.state;
        let valid = true;
        let proFileContent = '';
        let errorContent = '';
        for (let key in values) {
            if (values[key] === "") {
                errorContent += `
                <p class='proFileContent'> <b>${key} : is invalid </b></p>
                `
                valid = false
            }
            proFileContent += `
            <p class='proFileContent'> <b>${key} :</b> ${values[key]}</p>
            `
        }
        for (let key in errors) {
            if (errors[key] !== '') {
                errorContent += `
                <p class='proFileContent'> <b>${key} : is invalid </b></p>
                `
                valid = false
            }
        }
        if (!valid) {
            Swal.fire({
                title: 'Thông Tin Của Bạn',
                html: errorContent,
                icon: 'error',
                confirmButtonText: 'ok'
            })
            return
        }
        Swal.fire({
            title: 'Thông Tin Của Bạn',
            html: proFileContent,
            icon: 'success',
            confirmButtonText: 'ok'
        })
    }

    render() {
        const { errors, values } = this.state;
        return (
            <div className="divValid">
                <form className='formValid' onSubmit={this.handleSubmit}>
                    <h2>Form Đăng Kí</h2>
                    {/* row one */}
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={values.fistName} type="text" name='fistName' required onChange={this.handleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Fist Name</label>
                                <span>{errors.fistName}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={values.lastName} type="text" name='lastName' required onChange={this.handleChange} />
                                <span>{errors.lastName}</span>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Last Name</label>
                            </div>
                        </div>
                    </div>
                    {/* row two */}
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={values.userName} type="text" name='userName' required onChange={this.handleChange} />
                                <span>{errors.userName}</span>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>User Name</label>
                            </div>
                        </div>
                    </div>
                    {/* row there */}
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={values.eMail} type="email" name='eMail' pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' required onChange={this.handleChange} />
                                <span>{errors.eMail}</span>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                            </div>
                        </div>
                    </div>
                    {/* row four */}
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={values.passWord} type="password" name='passWord' required onChange={this.handleChange} />
                                <span>{errors.passWord}</span>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={values.passWordConfirm} type="password" name='passWordConfirm' required onChange={this.handleChange} />
                                <span>{errors.passWordConfirm}</span>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Confirm Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="divBtnSubmit">
                        <button type='submit' className='btnSubmit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserProfile
