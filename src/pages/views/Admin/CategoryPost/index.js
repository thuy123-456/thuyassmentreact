import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api from '../../../../api/categoryPostApi'
import Swal from 'sweetalert2'
// import { storage } from '../../../../firebase/index'
import axios from 'axios'

const CategoryPost = props => {
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

    //xóa
    const deleteCategoryPost = (id) => {
        const dataFilter = categoryPost.filter(el => el.id !== id)
        if (dataFilter) {
            setCategoryPost(dataFilter);
            api.remove(id)
            console.log(api)
            Swal.fire(
                'Xóa thành công',
                'You clicked the button!',
                'success'
            )
        }
    }




    //list dữ liệu
    const listCategoryPost = data => {
        if (data) {
            return data.map((el, index) => (
                <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>

                    <td>
                        <Link to={`/admin/categoryPost/edit/${el.id}`} type="button" class="btn btn-warning">Sửa</Link>
                        <button style={{ marginLeft: "10px" }} onClick={() => deleteCategoryPost(el.id)} type="button" class="btn btn-warning">Xóa</button>
                    </td>
                </tr>

            ))
        }
    }
    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Danh mục của bài viết</h2>
            <Link to="/admin/categoryPost/add" type="button" class="btn btn-warning" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>

                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryPost ? listCategoryPost(categoryPost) : ''}

                </tbody>
            </table>

        </div>
    )
}
CategoryPost.propTypes = {

}

export default CategoryPost
