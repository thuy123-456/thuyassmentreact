import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { storage } from '../../../../firebase/index'

const AddUser = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => AddUsser(data);
    const [Url, setUrl] = useState()
    console.log(Url)


    let history = useHistory()
    const AddUsser = async (e) => {
        console.log(e)
        const data = await axios.post('http://localhost:8080/user', e);
        console.log(data);
        // debugger 
        history.push('/admin/user')
    }

    //upload ảnh
    const handleChange = e => {
        if (e.target.files[0]) {
            const imageAvatar = e.target.files[0];
            const uploadTask = storage.ref(`images/${imageAvatar.name}`).put(imageAvatar);
            console.log(uploadTask)
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => { console.log(error); },
                () => {
                    storage
                        .ref("images")
                        .child(imageAvatar.name
                        )
                        .getDownloadURL()
                        .then(url => {

                            setUrl(url);
                        });
                }
            );
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <h2 className="sidebar-brand-text mx-3">Thêm tài khoản</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên tài khoản</label>
                    <input type="text" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} name="name" className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                        {errors.name && errors.name.type === "pattern" && <span className="text-danger">Không được cách</span>}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mật khẩu <span className="text-danger">*</span></label>
                    <input type="text" name="password" ref={register({ required: true, minLength: 6, pattern: /^\S{1}.{0,24}$/i })} className="form-control" id="exampleInputEmail1" placeholder="Password" />
                    <small className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 6 ký tự</span>}
                        {errors.name && errors.name.type === "pattern" && <span className="text-danger">Không được cách</span>}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email <span className="text-danger">*</span></label>
                    <input type="text" name="email" ref={register} className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>



                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ảnh</label>
                    <div class="custom-file">
                        <img style={{ height: "200px" }} src={Url} />
                        <input name="image" type="hidden" value={Url} ref={register({ required: true })} />
                        <input type="file" onChange={handleChange} class="custom-file-input" id="inputGroupFile04" />

                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                        <small className="form-text text-danger">
                            {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                        </small>
                    </div>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phân quyền</label>
                    <select className="form-control" >
                        <option>Admin</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddUser.propTypes = {

}

export default AddUser
