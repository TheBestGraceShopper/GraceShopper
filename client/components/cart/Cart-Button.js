import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class CartButton extends Component {
  render() {
    console.log('What are my props? =========', this.props)
    return (
      <div id="shopping-cart" >
        <Link to="/home">
          <img id="shopping-cart-image" src="https://image.ibb.co/e0KLJL/shopping-cart.png" alt="shopping-cart" />
          <p className="cart-number">{this.props.state.order.cart.length}</p>
        </Link> {/* currently directs to home, but will change to direct to cart*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

// const mapDispatchToProps = (dispatch) => ({
//   fetchCartItems = () => {}
// })

export default connect(mapStateToProps)(CartButton);
