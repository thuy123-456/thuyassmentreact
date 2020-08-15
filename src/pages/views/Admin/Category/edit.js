import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../../../../api/categoryApi';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { storage } from '../../../../firebase/index'

const EditCategory = props => {
    const { id } = useParams();
    const history = useHistory()
    const [category, setCategory] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const [Url, setUrl] = useState()
    console.log(Url)

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
        const result = await axios.put(`http://localhost:8000/category/${id}`, data);
        console.log(result)
        history.push('/admin/category');
        Swal.fire(
            'Sửa thành công',
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
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ảnh</label>
                    <div class="custom-file">
                        <img style={{ height: "250px" }} src={Url ? Url : category.image} />
                        <input name="image" type="hidden" defaultValue={Url ? Url : category.image} ref={register({ required: true })} />
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

EditCategory.propTypes = {

}

export default EditCategory
