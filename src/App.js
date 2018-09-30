import React, { Component } from 'react'
import Navbar from './Navbar'
import Product from './Product'
import ShoppingCart from './ShoppingCart'

class App extends Component {
  state = {
    products: [],
    cartItems: []
  }

  handleRemoveItemFromCart = product => {
    let { cartItems } = this.state;
    cartItems = cartItems
      .map(cartItem => {
        if (cartItem.product.id === product.id) {
          cartItem.quantity = cartItem.quantity - 1;
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.quantity > 0);

    this.setState({ cartItems });
  }

  handleAddItemToCart = product => {
    /**
     * let = variabel yang bersifat read & write
     * const = variabel yang bersifat read-only
     */
    let cartItems = this.state.cartItems

    /**
     * Fungsi .some() memungkinkan untuk menggunakan fungsi logika ke dalam array
     * Reference Array.prototype.some
     */
    const alreadyExists = cartItems.some(
      cartItem => cartItem.product.id === product.id
    )

    if (alreadyExists) {
      cartItems = cartItems.map(cartItem => {
        if (cartItem.product.id === product.id) {
          cartItem.quantity++
        }

        return cartItem
      })
    } else {
      cartItems.push({
        product,
        quantity: 1
      })
    }

    this.setState({ cartItems })
  }

  componentDidMount() {
    fetch("https://product-list.glitch.me/")
      .then(response => response.json())
      .then(products => {
        this.setState({ products })
      })
  }

  render() {
    return (
    <div className="container">
        <Navbar />
        <div className="columns">
            <div className="column is-two-thirds">
                <div>
                    <h3 className="title">Our Products</h3>
                    <div className="columns">
                        {/* Product */}
                        {this.state.products.map(product => (
                          <Product key={product.id} data={product} onAddItemToCart={this.handleAddItemToCart} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Shopping Cart */}
            <ShoppingCart 
              cartItems={this.state.cartItems} 
              onRemoveItemFromCart={this.handleRemoveItemFromCart}
              />
        </div>
    </div>
    );
  }
}

export default App
