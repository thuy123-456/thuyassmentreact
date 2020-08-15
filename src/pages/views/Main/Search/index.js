import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import api from '../../../../api/productApi'
import api1 from '../../../../api/categoryApi'
import Slide from '../../../../components/Main/Header/Slide'



const Search = props => {
    const { name } = useParams();
    console.log(name)
    const [products, setProduct] = useState('')
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api.getAll('?_sort=price&_order=asc');
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct()
    }, []);
    // search

    const [KeyWord, setKeyWord] = useState(name)
    console.log(KeyWord)



    const [ProductSearch, setProductSearch] = useState()
    if (KeyWord !== name) {
        setKeyWord(name)
        setProductSearch(products.filter((p) => p.name.toUpperCase().indexOf(KeyWord.toUpperCase().toLowerCase().toLowerCase()) > -1))
    }

    products && !ProductSearch && setProductSearch(products.filter((p) => p.name.toUpperCase().toLowerCase().indexOf(KeyWord.toUpperCase().toLowerCase()) > -1))

    //list sp

    //sản phẩm theo danh mục
    const getAllProductsByCateId = async (id) => {
        try {
            const { data } = await api1.getProductsByCateId(id)
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onHandelClick = (id) => {
        getAllProductsByCateId(id)
    }
    //lấy dữ liệu category
    const [category, setCategory] = useState('')
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
    const listCategory = data => {

        if (data) {
            return data.map((el, index) => (
                <ul className="list-unstyled mb-0">
                    <li className="mb-1"><a href="#" onClick={() => onHandelClick(el.id)} className="d-flex"><span>{el.name}</span></a></li>
                </ul>
            ))
        }
    }
    return (
        <div>
            <Slide />
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-9 order-2">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                                    <div className="d-flex">
                                        <div className="dropdown mr-1 ml-md-auto">

                                        </div>
                                        <div className="btn-group">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                                <a className="dropdown-item" href="#">Relevance</a>
                                                <a className="dropdown-item" href="#">Name, A to Z</a>
                                                <a className="dropdown-item" href="#">Name, Z to A</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">Price, low to high</a>
                                                <a className="dropdown-item" href="#">Price, high to low</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                {/*  */}
                                {ProductSearch && ProductSearch.map((el, index) => (

                                    <div key={index} className="col-sm-6 col-lg-4 mb-4"  >
                                        <div className="block-4 text-center border" style={{ height: "330px" }}>
                                            <figure className="block-4-image">
                                                <Link to={`/detail/${el.id}`} ><img src={el.image} style={{ height: "150px" }} alt="Image placeholder" className="img-fluid" /></Link>
                                            </figure >
                                            <div className="block-4-text p-4">
                                                <h3><Link to={`/detail/${el.id}`}>{el.name}</Link></h3>
                                                <p className="text-primary font-weight-bold">${el.price}</p>
                                                <p className="mb-0">{el.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                                {/*  */}
                            </div>
                            <div className="row" >
                                <div className="col-md-12 text-center">
                                    <div className="site-block-27">


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 order-1 mb-5 mb-md-0">
                            <div className="border p-4 rounded mb-4">
                                <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                                {/*  */}
                                {category ? listCategory(category) : ''}
                            </div>
                            <div className="border p-4 rounded mb-4">
                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                                    <div id="slider-range" className="border-primary" />
                                    <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
                                </div>
                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                                    <label htmlFor="s_sm" className="d-flex">
                                        <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
                                    </label>
                                    <label htmlFor="s_md" className="d-flex">
                                        <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
                                    </label>
                                    <label htmlFor="s_lg" className="d-flex">
                                        <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-danger color d-inline-block rounded-circle mr-2" /> <span className="text-black">Red (2,429)</span>
                                    </a>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-success color d-inline-block rounded-circle mr-2" /> <span className="text-black">Green (2,298)</span>
                                    </a>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-info color d-inline-block rounded-circle mr-2" /> <span className="text-black">Blue (1,075)</span>
                                    </a>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-primary color d-inline-block rounded-circle mr-2" /> <span className="text-black">Purple (1,075)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* category */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="site-section site-blocks-2">
                                <div className="row justify-content-center text-center mb-5">
                                    <div className="col-md-7 site-section-heading pt-4">
                                        <h2>Categories</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos-delay>
                                        <a className="block-2-item" href="#">
                                            <figure className="image">
                                                <img src="images/women.jpg" alt="" className="img-fluid" />
                                            </figure>
                                            <div className="text">
                                                <span className="text-uppercase">Collections</span>
                                                <h3>Women</h3>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-delay={100}>
                                        <a className="block-2-item" href="#">
                                            <figure className="image">
                                                <img src="images/children.jpg" alt="" className="img-fluid" />
                                            </figure>
                                            <div className="text">
                                                <span className="text-uppercase">Collections</span>
                                                <h3>Children</h3>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-delay={200}>
                                        <a className="block-2-item" href="#">
                                            <figure className="image">
                                                <img src="images/men.jpg" alt="" className="img-fluid" />
                                            </figure>
                                            <div className="text">
                                                <span className="text-uppercase">Collections</span>
                                                <h3>Men</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

Search.propTypes = {

}

export default Search
