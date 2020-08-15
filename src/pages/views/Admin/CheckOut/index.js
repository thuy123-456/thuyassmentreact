import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api from '../../../../api/checkOutApi'
import api1 from '../../../../api/userAPI'
import api2 from '../../../../api/productApi'

const CheckOut = props => {
    const [checkOut, setCheckOut] = useState('')
    useEffect(() => {
        const getCheckOut = async () => {
            try {
                const { data } = await api.getAll();
                setCheckOut(data);
            } catch (error) {

            }
        }
        getCheckOut()
    }, []);

    console.log(checkOut)
    const deletecheckOut = (id) => {
        const dataFilter = checkOut.filter(el => el.id !== id)
        if (dataFilter) {
            setCheckOut(dataFilter);
            api.remove(id)
        }

    }

    //user
    const [user, setUser] = useState('')
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await api1.getAll();
                setUser(data);
            } catch (error) {

            }
        }
        getUser()
    }, []);

    //product

    const [product, setProduct] = useState('')
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api2.getAll();
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);

    const listCheckOut = data => {
        if (data) {
            return data.map((el, index) => (
                <tr key={index}>
                    <th scope="row">{el.id}</th>
                    <td>
                        {user && user.map(cate => cate.id == el.id_user ? cate.name : console.log(cate.id))}
                    </td>
                    <td>
                        {product && product.map(cate => cate.id == el.id_product ? cate.name : console.log(cate.id))}
                    </td>
                    <td>Mark</td>
                    <td>
                        <button onClick={() => deletecheckOut(el.id)} type="button" class="btn btn-outline-info">Xóa</button>
                    </td>
                </tr>
            ))
        }
    }

    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Giỏ hàng</h2>
            <Link to="" type="button" class="btn btn-outline-info" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tài khoản</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {checkOut ? listCheckOut(checkOut) : ''}
                </tbody>
            </table>

        </div>
    )
}

CheckOut.propTypes = {

}

export default CheckOut
