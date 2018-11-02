import React from 'react'
import {connect} from 'react-redux'
import {fetchAProduct} from '../../store'

import Review from './Review'
import AddToCart from '../cart/AddToCart'


class SingleProduct extends React.Component {
    constructor(){
        super();
        this.state = {
            cart: []
        }
        
        this.getLocalStorage = this.getLocalStorage.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
      this.props.getAProduct(this.props.match.params.productId);
      this.getLocalStorage();
    //   this.addToCart(this.props.selectedProduct)
    }

    getLocalStorage() {
        for (let key in this.state) {
          if (localStorage.hasOwnProperty(key)) {
            let value = localStorage.getItem(key)
            try {
              value = JSON.parse(value)
              this.setState([{[key]: value}])
            } catch (e) {
              this.setState([{[key]: value}])
            }
          }
        }
      }

      addToCart(product) {
        let cart = this.state.cart
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(product))
        var cartValue = localStorage.getItem('cart')
        var cartObj = JSON.parse(cartValue)
        this.setState(cartObj)
      }
    
 
    render() {
        console.log('LOCAL STORATE', localStorage)
        console.log('CARRRRT', this.state.cart)
        const {selectedProduct} = this.props
        if (!selectedProduct.id) {
           return 'Loading the product...'
        }

        return (
            selectedProduct.id &&
        <div>
            <div className="single-product">
                <h1>Name: {selectedProduct.name}</h1>
                <img src={selectedProduct.imageURL} />
                <p>Description: {selectedProduct.description}</p>
                <h2>Price: {selectedProduct.price}</h2>
                <AddToCart
                 selectedProduct={selectedProduct}
                 cart={this.state.cart}
                 addToCart={this.addToCart}
             />
            </div>
            <div>
              <Review productId={selectedProduct.id}/>
            </div>
        </div>
        )
    }
}



const mapStateToProps = state => ({
    selectedProduct: state.productsReducer.selectedProduct
})

const mapDispatchToProps = dispatch => ({
    getAProduct: (id) => dispatch(fetchAProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
