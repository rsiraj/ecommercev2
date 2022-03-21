import React, {useState} from 'react';
import ProductCard from '../components/ProductCard';
import Data from "../data/data.json";

const Products = () => {
    const [products, setProducts] = useState(Data.products);
    return (
        <>
            <div className="wrapper">
                <section className="for-sale">
                    <div className="section-info">
                        <h3>Plant Shop</h3>
                        <p>Check out our handpicked selection of houseplants available for purchase</p>
                    </div>
                    <div className="product-grid">
                        {
                            products.map((data) => (
                                <ProductCard data={data} />
                            ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Products