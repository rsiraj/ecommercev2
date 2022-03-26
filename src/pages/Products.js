import React from 'react';
import ProductCard from '../components/ProductCard';
// import Filter from '../components/Filter';
// import Sort from '../components/Sort';
// import InputTagCollection from '../components/InputTagCollection';
// import Data from "../data/data.json";

const Products = (props) => {
    const search = (s) => {
        props.setFilters({
            s 
        });
    }

    const sort = (sort) => {
        props.setFilters({
            ...props.filters,
            sort 
        });
    }

    // console.log(search);
    return (
        <>
            <div className="wrapper">
                <section className="for-sale">
                    <div className="section-info">
                        <h3>Plant Shop</h3>
                        <p>Check out our handpicked selection of houseplants available for purchase</p>
                    </div>
                    <div className='filters'>
                        <input type="text" className='searchbar' placeholder='Search...' onChange={e => search(e.target.value)} />
                        <select className="sort-select" onChange={e => sort(e.target.value)}>
                            <option value="">Recommended</option>
                            <option value="asc">$ Low to High</option>
                            <option value="desc">$ High to Low</option>
                        </select>
                    </div>
                    <div className="product-grid">
                        {props.products.map(product => {
                                return (
                                    <ProductCard key={product.Id} data={product}/>
                                )
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Products