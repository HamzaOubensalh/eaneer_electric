import React, { useState } from "react";
import './footer.css';


const Footer=()=>{
    return(
        <><div className="footer">
            <div className="footer-style">
                <div className="First-Footer">
                    <div className="Logo">
                        <img src="" alt="" />
                    </div>
                    <div className="Content-Footer">
                        <p>Contact Eaneer for the Energy Future</p>
                        <p>Contact Eaneer for Innovative Energy Solutions.</p>
                        <p>Transform Your Vision into Reality with Speed,</p>
                        <p>Efficiency and Savings.</p>
                    </div>
                </div>
                <div className="Second-Footer">
                    <div className="Home">
                        <p>Home</p>
                        <div className="table">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Technologies</a></li>
                        </div>

                        

                    </div>
                    <div className="Industry">
                        <p>Industry</p>
                        <div className="table">
                        <li><a href="">Industrial</a></li>
                        <li><a href="">Agriculture</a></li>
                        <li><a href="">Building</a></li>
                        <li><a href="">Security</a></li>
                        <li><a href="">Energy</a></li>
                        </div>

                    </div>
                    <div className="Inverstors">
                        <p>Inverstors</p>
                        <div className="table">
                        <li><a href="">Projects</a></li>
                        <li><a href="">Finance</a></li>
                        <li><a href="">Statement</a></li>
                        <li><a href="">Projections</a></li>

                        </div>

                    </div>
                    <div className="Company">
                        <p>Company</p>
                        <div className="table">
                        <li><a href="">Purpose</a></li>
                        <li><a href="">Innovation</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Carrier</a></li>
                        <li><a href="">Affiliate</a></li>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="Third-Footer">
            <div className="holder">
            <div className="links">
                    <a href="">Privacy Policy</a>
                    <a href="">Term Of Service</a>
                    <a href="">Accessibility</a>
                    <a href="">Contact</a>
                    <a href="">Logo</a>
            </div>
            <div className="copyright">
                    <p>2024 eaneer .all right reserved</p>
            </div>
            </div>
            </div></>
        
    )
}
export default Footer;