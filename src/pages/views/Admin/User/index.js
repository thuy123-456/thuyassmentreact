import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api from '../../../../api/userAPI'

const User = props => {
    const [user, setUser] = useState('')
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await api.getAll();
                setUser(data);
            } catch (error) {

            }
        }
        getUser()
    }, []);

    console.log(user)
    const deleteUser = (id) => {
        const dataFilter = user.filter(el => el.id !== id)
        if (dataFilter) {
            setUser(dataFilter);
            api.remove(id)
        }

    }
    const listUser = data => {
        if (data) {
            return data.map((el, index) => (
                <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.password}</td>
                    <td>{el.email}</td>
                    <td >
                        <img style={{ width: "100px" }} src={el.image} />
                    </td>
                    <td>{el.role}</td>
                    <td>

                        <button type="button" onClick={() => deleteUser(el.id)} class="btn btn-outline-info">Xóa</button>
                    </td>
                </tr>

            ))
        }
    }
    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Tài khoản</h2>
            <Link to="/admin/user/add" type="button" class="btn btn-outline-info" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Mật khẩu</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Phân quyền</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {user ? listUser(user) : ''}

                </tbody>
            </table>

        </div>
    )
}

User.propTypes = {

}

export default User
