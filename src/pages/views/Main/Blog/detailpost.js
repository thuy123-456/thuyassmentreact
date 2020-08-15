import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import api1 from '../../../../api/categoryApi'
import api from '../../../../api/postApi'

const DetailPost = props => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        const getDetail = async () => {
            try {
                const { data } = await api.get(id);
                console.log(data)
                setDetail(data);
            } catch (error) {
            }
        }
        getDetail()
    }, []);


    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Detail Post</strong></div>
                    </div>
                </div>
            </div>
            {/* <div className="site-section">
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 style={{ fontSize: "30px" }}>{detail.title}</h1>
                            <img src={detail.image} style={{ width: "1000px", height: "500px", marginTop: "50px" }} alt="Image" className="img-fluid" />
                            <div style={{ marginTop: "30px" }}>
                                <p className="mb-4">{detail.content}</p>
                            </div>
                        </div>
                        <div className="col-md-12" style={{ marginLeft: "-200px" }} >
                            <h2 className="text-black">

                            </h2>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h1 style={{ fontSize: "30px" }}>{detail.title}</h1>
                        <img src={detail.image} style={{ width: "1000px", height: "500px", marginTop: "50px" }} alt="Image" className="img-fluid" />
                        <div style={{ marginTop: "30px" }}>
                            <p className="mb-4">{detail.content}</p>
                        </div>


                    </div>
                    <div className="col-md-3">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5>Categories</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item list-group-item-action active">First item</a>
                                        <a href="#" className="list-group-item list-group-item-action">Second item</a>
                                        <a href="#" className="list-group-item list-group-item-action">Third item</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="http://www.3forty.media/cannix/wp-content/uploads/2018/04/clem-onojeghuo-228522-unsplash-1-768x1153.jpg" />
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

DetailPost.propTypes = {

}

export default DetailPost

