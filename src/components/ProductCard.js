import React from 'react';
import "../App.css";

const ProductCard = ({data}) => {
    return (
        <div className="product">
            <div className="product-img">
                {data.sale ? <div className="sale-badge"><span>{data.sale}</span></div>:""}
                <img src={data.image} alt="prod2" />
            </div>
            <div className="product-desc">
                <div className="prod-flex">
                    <h3>{data.title}</h3>
                    <h3 className="text-main">${data.price}</h3>
                </div>
                <p>{data.description}</p>
                <a href="" className="text-main">View Details</a>
            </div>
        </div>
    )
}

export default ProductCard;