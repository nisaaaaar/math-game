import React from 'react';
//import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer mt-5">
            <div className="container">
                <div className="row justify-content-center">             
                    
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-instagram mr-2" href="https://www.instagram.com/nisaaaaar/"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-linkedin mr-2" href="https://www.linkedin.com/in/nisar-ahmad-a9ab30110/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-github mr-2" href="https://github.com/nisaaaaar"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto mt-5">
                        <p style={{color:"white"}}>© Copyright 2020 Nisar Ahmad</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;