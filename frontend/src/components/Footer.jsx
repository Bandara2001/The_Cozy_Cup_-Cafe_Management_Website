import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="https://pagedone.io/" className="footer-logo-link">
                        <svg className="footer-logo-svg" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Logo paths */}
                        </svg>
                    </a>
                </div>

                <ul className="footer-links">
                    <li><a href="http://localhost:3000/shop" className="footer-link">Products</a></li>
                    <li><a href="#" className="footer-link">Resources</a></li>
                    <li><a href="http://localhost:3000/about" className="footer-link">Blogs</a></li>
                    <li><a href="http://localhost:3000/contact" className="footer-link">Support</a></li>
                </ul>

                
                <span className="footer-copyright">
                    ©<a href="#" className="footer-link">COZY_CUP</a> 2025, All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;