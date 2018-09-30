import React from 'react'

const Product = ({ data, onAddItemToCart }) => {
    const { name, imageSrc, desc, price } = data;

    return(
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img 
                            alt={ name }
                            src={ imageSrc }
                            />
                    </figure>
                </div>
                <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{ name }</p>
                        <div className="content">{ desc }<br /></div>
                        <h5>Rp { price }</h5>
                        <button 
                            onClick={() => onAddItemToCart(data)} 
                            className="button is-primary">Add To Cart</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Product