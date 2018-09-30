import React from 'react';

const ShoppingCart = ({ cartItems, onRemoveItemFromCart }) => {
    const totalPrice = cartItems.reduce((carrier, cartItem) => {
        return carrier + cartItem.quantity * cartItem.product.price
    }, 0)

    const cartItem = cartItems.length === 0 ? (
        <tr>
            <td colSpan="4">No item in your cart</td>
        </tr>
    ) : (cartItems.map((item, index) => (
            <tr key={index}>
                <td>{ item.product.name }</td>
                <td>{ item.product.price }</td>
                <td>{ item.quantity }</td>
                <td>
                    <button 
                        className="button is-danger is-small"
                        onClick={() => onRemoveItemFromCart(item.product)}
                    >-</button>
                </td>
            </tr>
        )
    ));

    return (
        <div className="column">
          <h3 className="title is-4">Shopping Cart</h3>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cartItem}
            </tbody>
          </table>
          <h3>Total : Rp {totalPrice}</h3>
        </div>
    )
}

export default ShoppingCart;