import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api from '../../../../api/contactApi'
import Swal from 'sweetalert2'
import { storage } from '../../../../firebase/index'

const ContactAdmin = props => {
    const [contact, setcontact] = useState('')
    useEffect(() => {
        const getcontact = async () => {
            try {
                const { data } = await api.getAll();
                setcontact(data);
            } catch (error) {
            }
        }
        getcontact()
    }, []);

    //xóa sản phẩm
    const deletecontact = (id) => {
        const dataFilter = contact.filter(el => el.id !== id)
        if (dataFilter) {
            setcontact(dataFilter);
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
    const listcontact = data => {
        if (data) {
            return data.map((el, index) => (
                <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td>{el.content}</td>
                    <td>
                        <button style={{ marginLeft: "10px" }} onClick={() => deletecontact(el.id)} type="button" class="btn btn-outline-info">Xóa</button>
                    </td>
                </tr>

            ))
        }
    }
    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Liên hệ của khách hàng</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Nội dung</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {contact ? listcontact(contact) : ''}

                </tbody>
            </table>

        </div>
    )
}

ContactAdmin.propTypes = {

}

export default ContactAdmin
