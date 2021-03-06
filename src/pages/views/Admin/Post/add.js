import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import api2 from '../../../../api/userAPI'
import axios from 'axios'
import { storage } from '../../../../firebase/index'

const AddPost = props => {
    const d = new Date();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => addPost(data);
    const [Url, setUrl] = useState()
    console.log(Url)


    //lấy danh mục
    const [categoryPost, setCategoryPost] = useState('')
    useEffect(() => {
        const getCategoryPost = async () => {
            try {
                const { data } = await axios.get('http://localhost:8000/category_post');
                setCategoryPost(data);
            } catch (error) {
            }
        }
        getCategoryPost()
    }, []);

    //lấy user
    const [user, setUser] = useState('')
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await api2.getAll();
                setUser(data);
            } catch (error) {

            }
        }
        getUser()
    }, []);


    const history = useHistory()
    const addPost = async (e) => {
        console.log(e)
        const data = await axios.post('http://localhost:8000/post', e);
        console.log(data);
        // debugger
        history.push('/admin/post')
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
                    <h2 className="sidebar-brand-text mx-3">Thêm bài viết</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                    <input type="text" ref={register({ required: true, minLength: 3 })} name="title" className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.title && errors.title.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.title && errors.title.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                        {/* {errors.title && errors.title.type === "pattern" && <span className="text-danger">Không được cách</span>} */}
                    </small>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Danh mục</label>
                    <select class="form-control" name="id_category" ref={register({ required: true })} id="">
                        {categoryPost && categoryPost.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                    <small className="form-text text-danger">
                        {errors.id_category && errors.id_category.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Tài khoản</label>
                    <select class="form-control" name="id_user" ref={register({ required: true })} id="">
                        {user && user.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                    <small className="form-text text-danger">
                        {errors.id_user && errors.id_user.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
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

                <input type="hidden" name="date" ref={register} value={d.toISOString()} className="form-control" id="exampleInputEmail1" />

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mô tả</label>
                    <input type="text" ref={register({ required: true, minLength: 3})} name="content" className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.content && errors.content.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.content && errors.content.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                        {/* {errors.content && errors.content.type === "pattern" && <span className="text-danger">Không được cách</span>} */}
                    </small>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddPost.propTypes = {

}

export default AddPost
