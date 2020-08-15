import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../../../../api/categoryPostApi';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const EditCategoryPost = props => {
    const { id } = useParams();
    const history = useHistory()
    const [category, setCategory] = useState({});
    const { register, handleSubmit, errors } = useForm();


    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api.get(id);
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    const onHandleSubmit = async (data) => {
        const result = await axios.put(`http://localhost:8000/category_post/${id}`, data);
        console.log(result)
        history.push('/admin/categoryPost');
        Swal.fire(
            'Sửa thành công',
            'You clicked the button!',
            'success'
        )
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <h2 className="sidebar-brand-text mx-3">Sửa danh mục</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                    <input type="text"
                        name="name"
                        className="form-control"
                        defaultValue={category.name}
                        id="exampleInputEmail1"
                        ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
                    />
                    <small className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.name && errors.name.type === "pattern" && <span className="text-danger">Không được cách</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditCategoryPost.propTypes = {

}

export default EditCategoryPost