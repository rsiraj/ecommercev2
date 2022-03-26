import React from 'react';
import "../App.css";

const ProductCard = ({data}) => {
    return (
        <div className="product">
            <div className="product-img">
                {data.Sale ? <div className="sale-badge"><span>{data.Sale}</span></div>:""}
                <img src={data.Image} alt={data.Title} />
            </div>
            <div className="product-desc">
                <div className="prod-flex">
                    <h3>{data.Title}</h3>
                    <h3 className="text-main">${data.Price}</h3>
                </div>
                <p>{data.Description}</p>
                <a href="" className="text-main">View Details</a>
            </div>
        </div>
    )
}

export default ProductCard;