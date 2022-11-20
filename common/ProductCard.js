import React from "react";

const ProductCard = (title, description, price, image) => {
    return (
        <div className="card" style={{width : "100%"}}>
            <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p style={{fontWeight: "bold"}}>$ {price}</p>
                </div>
        </div>
    );
}

export default ProductCard;