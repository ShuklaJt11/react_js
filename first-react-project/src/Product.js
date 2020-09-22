import React from 'react'

function Products(props) {
    return (
        <div className="product-card">
            <h3 className="product-name">{props.product.name}</h3>
            <span className="product-price">${props.product.price}</span>
            <p className="product-description">"{props.product.description}"</p>
            <hr />
        </div>
    )
}

export default Products