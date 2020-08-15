import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const Registration = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => AddUsser(data);


    let history = useHistory()
    const AddUsser = async (e) => {
        console.log(e)
        const data = await axios.post('http://localhost:3000/user', e);
        console.log(data);
        // debugger
        history.push('/')
        Swal.fire(
            'Thêm thành công',
            'You clicked the button!',
            'success'
        )
    }
    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
                            <Link to="/login" href="index.html">Login</Link> <span className="mx-2 mb-0">/</span>
                            <strong className="text-black">Registration</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="h3 mb-3 text-black">Đăng kí</h2>
                        </div>
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
                                <div className="p-3 p-lg-5 border">
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label htmlFor="c_fname" className="text-black">Họ tên<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} id="c_fname" name="name" />
                                            <small className="form-text text-danger">
                                                {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                                                {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                                                {errors.name && errors.name.type === "pattern" && <span className="text-danger">Không được cách</span>}
                                            </small>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="c_lname" className="text-black">Email <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" ref={register} id="c_lname" name="email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_email" className="text-black">Mật khẩu <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" ref={register({ required: true, minLength: 6, pattern: /^\S{1}.{0,24}$/i })} id="c_email" name="password" placeholder />
                                            <small className="form-text text-danger">
                                                {errors.password && errors.password.type === "required" && <span>Vui lòng không để trống</span>}
                                                {errors.password && errors.password.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                                                {errors.password && errors.password.type === "pattern" && <span className="text-danger">Không được cách</span>}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_subject" className="text-black">Nhập lại mật khẩu </label>
                                            <input type="text" className="form-control" id="c_subject" name="c_subject" />
                                        </div>
                                    </div>

                                    <div className="form-group row" style={{ marginTop: "50px" }}>
                                        <div className="col-lg-12">

                                            <button type="submit" class="btn btn-dark">Đăng kí</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

Registration.propTypes = {

}

export default Registration
