import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-light sidebar sidebar  accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3" style={{ color: "#ffff" }}>ADMIN <sup>*</sup></div>
            </a>
            <li className="nav-item">
                <Link to="/admin" className="nav-link dropdown-item" >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span style={{ color: "#ffff" }}>Dashboard</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/category" className="nav-link dropdown-item" >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span style={{ color: "#ffff" }}>danh mục sản phẩm</span></Link>
            </li>


            <li className="nav-item">
                <Link to="/admin/product" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span style={{ color: "#ffff" }}>sản phẩm</span></Link>
            </li>


            <li className="nav-item" style={{ hover: "red" }}>
                <Link to="/admin/categoryPost" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span style={{ color: "#ffff" }}>Danh mục tin tức</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/post" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span style={{ color: "#ffff" }}>Tin tức</span></Link>
            </li>

            <li className="nav-item">
                <Link to="/" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span style={{ color: "#ffff" }}>Trang chủ</span></Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul >
    )
}

Sidebar.propTypes = {

}

export default Sidebar
