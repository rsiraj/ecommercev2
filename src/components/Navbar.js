import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='wrapper'>
                <nav> 
                    <a href="/uconstruction.html" aria-label="Search">
                    <div className="menu-toggle">
                        <span className="ti-search"></span>
                    </div></a>
                    <div className="brand">
                        <a href="/"><h2 className="text-main">Plant Heaven</h2></a>
                    </div>
                    <a href="/uconstruction.html" aria-label="Search">
                    <div className="cart">
                        <span className="ti-shopping-cart"></span>
                        <span className="cart-count"><span className="text-main">3</span></span>
                    </div></a>
                </nav>
            </div>
            <section className="sub-nav">
                <h2 className="hidden-validation">Nav</h2> 
                <div className="sub-nav-top">
                    <div className="wrapper">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Shop</a></li>
                            <li><a href="/uconstruction">Plant Care</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/uconstruction">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sub-nav-bottom">
                    <div className="wrapper">
                        <div className="sub-nav-bottom-links">
                            <a href="/">Free Shipping</a> |
                            <a href="/">3-Day Delivery</a> |
                            <a href="/uconstruction">Free Plantcare Info</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="is-mobile-menu"></div>
            <div className="mobile-menu"> 
                <a href="/"><div className="menu-item">
                    <span className="ti-home"></span>
                    <p>Home</p>
                </div></a>
                <a href="/products"><div className="menu-item">
                    <span className="ti-bag"></span>
                    <p>Shop</p>
                </div></a>
                <a href="/uconstruction"><div className="menu-item">
                    <span className="ti-shine"></span>
                    <p>Plant Care</p>
                </div></a>
                <a href="/contact"><div className="menu-item">
                    <span className="ti-comment"></span>
                    <p>Contact</p>
                </div></a>
            </div>
        </>
    )
}

export default Navbar;