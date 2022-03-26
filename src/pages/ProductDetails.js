import React from 'react'

const ProductDetails = () => {
    return (
        <>
            <div class="product-images">
                <div class="swiper-container gallery-top">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="background-image: url(/img/prod1.jpeg);">
                        </div>
                        <div class="swiper-slide" style="background-image: url(/img/prod2.jpeg);">
                        </div>
                        <div class="swiper-slide" style="background-image: url(/img/prod3.jpeg);">
                        </div>
                    </div>
                </div>

                <div class="swiper-container gallery-thumbs">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="background-image: url(/img/prod4.jpeg);"></div>
                        <div class="swiper-slide" style="background-image: url(/img/prod5.jpeg);"></div>
                        <div class="swiper-slide" style="background-image: url(/img/prod6.jpeg);"></div>
                    </div>
                </div>
            </div>

        <div class="wrapper full-screen product-description">
            <h3>Beautiful low maintenance houseplant</h3>
            <p><small class="sale bg-main">SALE</small><span class="price text-main">$29.99</span></p>
            <p class="short-describe">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div class="variations color">
                <h4>COLOR</h4>
                <label for="" class="product-color">
                    <input type="radio" name="color" checked id=""/>
                    <span></span>
                </label>
                <label for="" class="product-color">
                    <input type="radio" name="color" id=""/>
                    <span></span>
                </label>
                <label for="" class="product-color">
                    <input type="radio" name="color" id=""/>
                    <span></span>
                </label>
                <label for="" class="product-color">
                    <input type="radio" name="color" id=""/>
                    <span></span>
                </label>
            </div>
            <div class="variations sizes">
                <h4>SIZE</h4>
                <label for="" class="product-size">
                    S <input type="radio" name="size" checked id=""/>
                    <span></span>
                </label>
                <label for="" class="product-size">
                    M <input type="radio" name="size" id="">
                    <span></span>
                </label>
                <label for="" class="product-size">
                    L <input type="radio" name="size" id=""/>
                    <span></span>
                </label>
                <label for="" class="product-size">
                    XL <input type="radio" name="size" id=""/>
                    <span></span>
                </label>
            </div>

            <div class="product-action-button">
                <div class="quantity-controls">
                    <button>-</button>
                    <input type="number" readonly/>
                    <button>+</button>
                </div>
                <div class="tocart-control">
                    <button class="btn-main">
                        <span class="ti-shopping-cart"></span>
                        Add to cart
                    </button>
                </div>
            </div>

            <section class="long-describe">
                <h4>Description <span class="ti-arrow-right"></span></h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, facere. Maiores minima similique debitis quasi quam nihil porro provident sit asperiores voluptates molestias illo nesciunt, aspernatur excepturi. Dicta, laborum repellat.</p>
            </section>
        </div>

        </>
    )
}

export default ProductDetails