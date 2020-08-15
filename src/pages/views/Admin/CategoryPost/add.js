import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'


const AddCategoryPost = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => addCategoryPost(data);
    const history = useHistory()
    const addCategoryPost = async (e) => {
        console.log(e)
        const data = await axios.post('http://localhost:8000/category_post', e);
        console.log(data);
        // debugger
        history.push('/admin/categoryPost')
        Swal.fire(
            'Thêm thành công',
            'You clicked the button!',
            'success'
        )
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



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCategoryPost.propTypes = {

}

export default AddCategoryPost
