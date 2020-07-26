import React from 'react';
//import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer mt-5">
            <div className="container">
                <div className="row justify-content-center">             
                    
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google mr-2" href="#"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook mr-2" href="#"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin mr-2" href="#"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter mr-2" href="#"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google mr-2" href="#"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto mt-5">
                        <p>© Copyright 2020 Nisar Ahmad</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;