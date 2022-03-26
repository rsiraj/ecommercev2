import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='wrapper'>
                <nav> 
                    <NavLink to="/uconstruction" aria-label="Search">
                    <div className="menu-toggle">
                        <span className="ti-search"></span>
                    </div></NavLink>
                    <div className="brand">
                        <NavLink to="/"><h2 className="text-main">Plant Heaven</h2></NavLink>
                    </div>
                    <NavLink to="/uconstruction" aria-label="Search">
                    <div className="cart">
                        <span className="ti-shopping-cart"></span>
                        <span className="cart-count"><span className="text-main">3</span></span>
                    </div></NavLink>
                </nav>
            </div>
            <section className="sub-nav">
                <h2 className="hidden-validation">Nav</h2> 
                <div className="sub-nav-top">
                    <div className="wrapper">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/products">Shop</NavLink></li>
                            <li><NavLink to="/uconstruction">Plant Care</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/uconstruction">About</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="sub-nav-bottom">
                    <div className="wrapper">
                        <div className="sub-nav-bottom-links">
                            <NavLink to="/">Free Shipping</NavLink> |
                            <NavLink to="/">3-Day Delivery</NavLink> |
                            <NavLink to="/uconstruction">Free Plantcare Info</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <div className="is-mobile-menu"></div>
            <div className="mobile-menu"> 
                <NavLink to="/"><div className="menu-item">
                    <span className="ti-home"></span>
                    <p>Home</p>
                </div></NavLink>
                <NavLink to="/products"><div className="menu-item">
                    <span className="ti-bag"></span>
                    <p>Shop</p>
                </div></NavLink>
                <NavLink to="/uconstruction"><div className="menu-item">
                    <span className="ti-shine"></span>
                    <p>Plant Care</p>
                </div></NavLink>
                <NavLink to="/contact"><div className="menu-item">
                    <span className="ti-comment"></span>
                    <p>Contact</p>
                </div></NavLink>
            </div>
        </>
    )
}

export default Navbar;