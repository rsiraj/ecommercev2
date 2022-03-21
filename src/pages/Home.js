import React from 'react';
import Testimonials from "../components/Testimonials.js";

const Home = () => {
    return (
        <>
            <div className="wrapper full-screen hero-bg">
                <section className="hero"> 
                    <div className="hero-content"> 
                        <h3>Making <span className="text-main">Plantcare</span> <br/>Fun and easy</h3>
                        <p>Helping you take care<br/> of your plants since 2010</p>
                        <div className="hero-action-btn">
                            <a href="/products" className="btn-main">Shop</a>
                            <a href="/uconstruction.html" className="btn-secondary-outline">Plant Care</a>
                        </div>
                    </div>
                    <div className="hero-image"> 
                        <img src="/img/heroImage.png" alt="hanging vine"/>
                    </div>
                </section>
            </div>
                            
            <section className="articles-section bg-secondary"> 
                <div className="wrapper">
                    <div className="section-info">
                        <h3>Free Plantcare for Life</h3>
                        <p>We believe that it's our duty to help you keep your plants <span className="text-main">alive</span> and happy</p>
                    </div>
                    <div className="articles">
                        <div className="article">
                            <div className="article-img">
                                <img src="/img/info1.jpg" alt="info1" />
                            </div>
                            <div className="article-info">
                                <h4>Leaving plants unattended for a while?</h4>
                                <p>Vacations, work trips, holidays - we cant always be home to care for our plants, but it doesnt take much to ensure your plants dont suffer while you're gone.</p>
                                <a href="/uconstruction.html" className="text-main">Learn more</a>
                            </div>
                        </div>
                        <div className="article">
                            <div className="article-img">
                                <img src="/img/info2.jpeg" alt="info2" />
                            </div>
                            <div className="article-info">
                                <h4>Can't remember when to water?</h4>
                                <p>Download our app and get notifications when its time to water/repot your plant. Follow the guide on our <a href="/uconstruction.html" className="text-main">Plant Care</a> page</p>
                                <a href="/uconstruction.html" className="text-main">Learn more</a>
                            </div>
                        </div>
                        <div className="article">
                            <div className="article-img">
                                <img src="/img/info3.jpeg" alt="info3" />
                            </div>
                            <div className="article-info">
                                <h4>Don't know which plant to buy?</h4>
                                <p>Read our guide on types of houseplants to learn which plants fit your lifestyle and ability to take care of them</p>
                                <a href="/uconstruction.html" className="text-main">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                            
            <section className="features-section bg-white"> 
                <div className="wrapper">
                    <div className="section-info">
                        <h3>Why buy from Plant Heaven?</h3>
                        <p></p>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="ti-truck"></span>
                            </div>
                            <div className="feature-info">
                                <h4>Free 3-day Delivery</h4>
                                <p>We offer free 3-day shipping for all plants without exceptions</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="ti-key"></span>
                            </div>
                            <div className="feature-info">
                                <h4>Turn-key Plant Care</h4>
                                <p>Your plant arrives with easy to follow instructions for care, leaving no guesswork</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="ti-face-smile"></span>
                            </div>
                            <div className="feature-info">
                                <h4>We Give Back</h4>
                                <p>5% of all profits are donated to organizations planting trees around the world</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <span className="ti-money"></span>
                            </div>
                            <div className="feature-info">
                                <h4>Price-Match Guarantee</h4>
                                <p>Found it cheaper elsewhere? No problem, we will price-match it</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
        </>
    )
}

export default Home;