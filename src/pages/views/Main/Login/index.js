import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Login = props => {
    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Login</strong></div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="h3 mb-3 text-black">Đăng nhập</h2>
                        </div>
                        <div className="col-md-12">
                            <form action="#" method="post">
                                <div className="p-3 p-lg-5 border">
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label htmlFor="c_fname" className="text-black">Họ tên<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="c_lname" className="text-black">Email <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_lname" name="c_lname" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_email" className="text-black">Mật khẩu <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="c_email" name="c_email" placeholder />
                                        </div>
                                    </div>

                                    <div>
                                        <h4>Bạn chưa có tài khoản ? <Link to="/registration" href=""><u>Tại đây</u></Link></h4>

                                    </div>
                                    <div className="form-group row" style={{ marginTop: "50px" }}>
                                        <div className="col-lg-12">

                                            <button type="button" class="btn btn-dark">Đăng Nhập</button>
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

Login.propTypes = {

}

export default Login
