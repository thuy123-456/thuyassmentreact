import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import axios from 'axios';
import api from '../../../../api/productApi'
import api1 from '../../../../api/categoryApi'
import Swal from 'sweetalert2'




const Products = props => {
    const [product, setProduct] = useState('')
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api.getAll();
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);
    console.log(product);
    //xóa
    const deleteProduct = (id) => {
        const dataFilter = product.filter(el => el.id !== id)
        if (dataFilter) {
            setProduct(dataFilter);
            api.remove(id)
            Swal.fire(
                'Xóa thành công',
                'You clicked the button!',
                'success'
            )
        }
    }


    const [category, setCategory] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);


    //list DL
    const listProduct = data => {
        if (data) {
            return data.map((el, index) => (
                <Fragment>
                    <tr key={index}>
                        <td>{el.id}</td>
                        <td>
                            {category.map((cate, index) => {
                                if (cate.id == el.categoryId) {
                                    return cate.name;
                                }
                            })}
                        </td>
                        <td>{el.name}</td>
                        <td>
                            <img style={{ width: "100px" }} src={el.image} />
                        </td>
                        <td>{el.price}</td>
                        <td>{el.price_sale}</td>
                        <td>{el.soluong}</td>
                        <td>{el.status}</td>
                        <td>{el.date}</td>
                        <td style={{ width: "150px" }}>{el.content}</td>
                        <td>
                            <Link to={`/admin/product/edit/${el.id}`} type="button" className="btn btn-warning">Sửa</Link>
                            <button type="button" onClick={() => deleteProduct(el.id)} style={{ marginTop: "10px" }} className="btn btn-warning">Xóa</button>
                        </td>
                    </tr>
                </Fragment>
            ))
        }
    }

    return (
        <div >
            <h2 className="sidebar-brand-text mx-3">Sản phẩm</h2>
            <Link to="/admin/product/add" type="button" className="btn btn-warning" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col" style={{ width: "100px" }}>Danh mục</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Sale</th>
                        <th scope="col" style={{ width: "80px" }}>SL</th>
                        <th scope="col" style={{ width: "100px" }}>Trạng thái</th>
                        <th scope="col">Ngày đăng</th>
                        <th scope="col">Mô tả ngắn</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {product ? listProduct(product) : ''}
                </tbody>
            </table>
        </div>
    )
}

Products.propTypes = {

}

export default Products
