import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { storage } from '../../../../firebase/index'

const AddCategory = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => addCategory(data);
    const [Url, setUrl] = useState()
    console.log(Url)


    const history = useHistory()
    const addCategory = async (e) => {
        console.log(e)
        const data = await axios.post('http://localhost:8000/category', e);
        console.log(data);
        // debugger
        history.push('/admin/category')
        Swal.fire(
            'Thêm thành công',
            'You clicked the button!',
            'success'
        )
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
                    <h2 className="sidebar-brand-text mx-3">Thêm danh mục</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                    <input type="text" ref={register({ required: true, minLength: 3 })} name="name" className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ảnh</label>
                    <div class="custom-file">
                        <img style={{ height: "250px" }} src={Url} />
                        <input name="image" type="hidden" value={Url} ref={register({ required: true })} />
                        <input type="file" onChange={handleChange} class="custom-file-input" id="inputGroupFile04" />

                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                        <small className="form-text text-danger">
                            {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                        </small>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
