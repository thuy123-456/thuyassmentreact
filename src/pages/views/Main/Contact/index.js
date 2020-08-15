import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Contact = props => {

    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong></div>
                    </div>
                </div>
            </div>
            <section id="contact" className="pt-4">
                <div className="section-content">
                    <div className="container">
                        <h3 className="text-center">Liên hệ với chúng tôi</h3>
                    </div>
                </div>
                <div className="contact-section ">
                    <div className="container">
                        <form className="row">
                            <div className="col-md-6 form-line">
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">Your name</label>
                                    <input type="text" className="form-control" id placeholder=" Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">Mobile No.</label>
                                    <input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." />
                                </div>
                                <div class="form-group">
                                    <label for="description"> Message</label>
                                    <textarea class="form-control" id="description" placeholder="Enter Your Message"></textarea>
                                </div>
                                <div>

                                    <button type="button" class="btn btn-warning submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>Gửi</button>
                                </div>
                            </div>
                            <div className="col-md-6 form-line">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3383688432!2d105.78328851429696!3d20.97906929485008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accd88c1276b%3A0xc7ec85c744d8874e!2zSOG7kyBHxrDGoW0gUGxhemE!5e0!3m2!1svi!2s!4v1597238789538!5m2!1svi!2s" width={600} height={350} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </form></div></div></section>

        </div>
    )
}

Contact.propTypes = {

}

export default Contact
