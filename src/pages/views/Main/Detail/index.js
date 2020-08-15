import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../../../api/productApi'
import api1 from '../../../../api/categoryApi'

const Detail = props => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api.get(id);
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);
    const [category, setCategory] = useState('')

    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.get();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);
    console.log(category)


    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Detail</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.image} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-black">
                                {/* {product.id_category} */}
                            </h2>
                            <p>{product.name}</p>


                            <h2 style={{ marginTop: "20px" }}>Giá:</h2>
                            <strike style={{ marginTop: "10px" }}><strong className="text-primary h4">{product.price}</strong> <span>VNĐ</span></strike>

                            <h2 style={{ marginTop: "20px" }}>Giá sale:</h2>
                            <p style={{ marginTop: "10px" }}><strong className="text-primary h4">{product.price_sale}</strong> <span>VNĐ</span></p>

                            <h2 style={{ marginTop: "20px", color: "red" }}>{product.status}</h2>
                            <div className="mb-1 d-flex" style={{ marginTop: "20px" }}>


                                <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-sm" name="shop-sizes" /></span> <span className="d-inline-block text-black">Small</span>
                                </label>
                                <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-md" name="shop-sizes" /></span> <span className="d-inline-block text-black">Medium</span>
                                </label>
                                <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-lg" name="shop-sizes" /></span> <span className="d-inline-block text-black">Large</span>
                                </label>
                                <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-xl" name="shop-sizes" /></span> <span className="d-inline-block text-black"> Extra Large</span>
                                </label>
                            </div>
                            <div className="mb-5">
                                <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                                    </div>
                                    <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                    </div>
                                </div>
                            </div>
                            <p><Link to="/cart" href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</Link></p>
                            <div style={{ marginTop: "30px" }}>
                                <p className="mb-4">{product.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section block-3 site-blocks-2 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>Sản Phẩm Cùng Loại</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nonloop-block-3 owl-carousel">
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Tank Top</a></h3>
                                            <p className="mb-0">Finding perfect t-shirt</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Corater</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Polo Shirt</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/cloth_3.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">T-Shirt Mockup</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Corater</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {

}

export default Detail
