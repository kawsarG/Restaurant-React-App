import React from 'react';
import './Footer.css';
import im from '../../components/Header/logo2.png';


export default function Footer() {
    return (
        <div>
            <div id="footer" className="row">
            <div className="col-6 pt-5">
                <img src={im} alt=""></img>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col pt-5">
                        <p>About Online Foods
                        </p>
                        <p>Read Our Blog
                        </p>
                        <p>Sign Up to deliber
                        </p>
                        <p>Add your Restaurant
                        </p>
                    </div>
                    <div className="col pt-5">
                    <p>Get Help
                        </p>
                        <p>View FAQs
                        </p>
                        <p>Find Us
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="row calar">
                <div className="col-5">&copy; All Rights Reserved</div>
                <div className="col-3">Privacy Policy</div>
                <div className="col-2">Terms Of Use</div>
                <div className="col-2">Pricing</div>
            </div>
        </div>
    )
}
