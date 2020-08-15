import React from 'react';
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar'
import Header from '../../components/Main/Header';



export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Header />
            <Navbar />
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
