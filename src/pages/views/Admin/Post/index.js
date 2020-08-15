import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api2 from '../../../../api/userAPI'
import api from '../../../../api/postApi'

import Swal from 'sweetalert2'


const Post = props => {
    const [post, setPost] = useState('')
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api.getAll();
                setPost(data);
            } catch (error) {
            }
        }
        getPost()
    }, []);

    //get data categoryPost
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

    //get data user
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
    //xóa sản phẩm
    const deletePost = (id) => {
        const dataFilter = post.filter(el => el.id !== id)
        if (dataFilter) {
            setPost(dataFilter);
            const remove = api.remove(id)
            console.log(remove)
            Swal.fire(
                'Xóa thành công',
                'You clicked the button!',
                'success'
            )
        }
        console.log(id);

    }
    //list dữ liệu
    const listPost = data => {
        if (data) {
            return data.map((el, index) => (
                <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>
                        {categoryPost && categoryPost.map(cate => cate.id == el.id_category ? cate.name : console.log(cate.id))}
                    </td>

                    <td>
                        <img style={{ width: "100px", height: "100px" }} src={el.image} />
                    </td>
                    <td style={{ width: "150px" }}>{el.content}</td>
                    <td>
                        <Link to={`/admin/post/edit/${el.id}`} type="button" class="btn btn-warning">Sửa</Link>
                        <button style={{ marginLeft: "10px" }} onClick={() => deletePost(el.id)} type="button" class="btn btn-warning">Xóa</button>
                    </td>
                </tr>

            ))
        }
    }
    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Bài viết</h2>
            <Link to="/admin/post/add" type="button" className="btn btn-warning" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Mô tả ngắn</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {post ? listPost(post) : ''}
                </tbody>
            </table>
        </div>
    )
}

Post.propTypes = {

}

export default Post
