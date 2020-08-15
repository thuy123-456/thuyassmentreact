import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../../../../api/categoryApi'
import api1 from '../../../../api/productApi'
import api2 from '../../../../api/categoryPostApi'
import api3 from '../../../../api/postApi'
import api4 from '../../../../api/userAPI'
import api5 from '../../../../api/contactApi'
import api6 from '../../../../api/checkOutApi'



const Dashboard = props => {
    // category
    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    // product
    const [product, setProduct] = useState('')
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api1.getAll();
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);
    // categoryPost
    const [categoryPost, setCategoryPost] = useState('')
    useEffect(() => {
        const getCategoryPost = async () => {
            try {
                const { data } = await api2.getAll();
                setCategoryPost(data);
            } catch (error) {
            }
        }
        getCategoryPost()
    }, []);

    // post
    const [post, setPost] = useState('')
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api3.getAll();
                setPost(data);
            } catch (error) {
            }
        }
        getPost()
    }, []);
    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
            </div>
            {/* Content Row */}
            <div className="row">
                {/* Category */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Category</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{category.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Product</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{product.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* User */}

                {/* Category Post*/}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Category Post</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{categoryPost.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Post */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Post</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{post.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}

                {/* Check out */}



            </div>

        </div >
    )
}

Dashboard.propTypes = {

}

export default Dashboard
