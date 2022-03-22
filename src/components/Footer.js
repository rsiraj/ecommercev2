import React from 'react';

const Footer = () => {
    return (
        <footer>
            <section className="mobile-contact-section bg-secondary">
                <div className="wrapper">
                    <div className="section-info">
                        <h3>Connect With Us</h3>
                        <div className="mobile-contact">
                            <div className="mobile-phone">
                                <span className="ti-mobile"></span>
                                <span>(704)123-4567</span>
                            </div>
                            <div className="mobile-mail">
                                <span className="ti-email"></span>
                                <span>help@plantheaven.com</span>
                            </div>
                            <div className="mobile-social-links">
                                <a href="https://www.facebook.com" target="_blank" aria-label="Facebook"><span className="ti-facebook"></span></a>
                                <a href="https://www.instagram.com" target="_blank" aria-label="Instagra"><span className="ti-instagram"></span></a>
                                <a href="https://www.twitter.com " target="_blank" aria-label="Twitter"><span className="ti-twitter"></span></a>
                                <a href="https://www.youtube.com" target="_blank" aria-label="Youtube"><span className="ti-youtube"></span></a>
                            </div>
                        </div>
                        <div className="footer-logo">
                            <a href="/"><img src="/img/logo.png" alt="plant heaven logo"/></a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-bottom"> 
                <small>Rehan Siraj <a href="https://github.com/rsiraj" target="_blank" aria-label="Github" className="ti-github text-main"></a> &copy; All rights reserved. Plant Heaven 2021</small>
            </div>
        </footer>
    )
}

export default Footer;