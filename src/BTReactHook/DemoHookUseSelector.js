import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComments } from '../redux/action/FaceBook_Action'

function DemoHookUseSelector() {

    let comment = useSelector(state => state.FacebookReducer.commment) // giống mapStateToProps
    let dispatch = useDispatch() // giống mapDispatchStatotProps

    // lấy thông tin người dùng 

    let [userComment, setUserComment] = useState({
        name: '',
        conntent: '',
        avata: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserComment({
            ...userComment,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let addComment = { ...userComment, avata: `https://i.pravatar.cc/150?u=${userComment.conntent}` }

        dispatch(addComments(addComment))
    }

    return (
        <div className='container'>
            <h4 className="card-title">FaceBook APP</h4>
            <div className="card  p-4">
                {comment.map((item, index) => {
                    return (
                        <div className='row' key={index}>
                            <div className='col-1'><img className="card-img-top" src={item.avata} alt={item.avata} style={{ width: "100px", height: "100px" }} /></div>
                            <div className='col-11 '>
                                <div className="card-body">
                                    <p className="card-text text-danger font-weight-bold text-left">{item.name}</p>
                                    <p className="card-text  text-left">{item.conntent}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='card p-4'>
                    <p className='font-weight-bold'>Name</p>
                    <input className='form-control' name='name' onChange={handleChange} />
                    <p className='font-weight-bold'>Content</p>
                    <input className='form-control' name='conntent' onChange={handleChange} />
                </div>
                <div className='border p-4'>
                    <button type='submit' className='btn btn-success my-2'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default DemoHookUseSelector
