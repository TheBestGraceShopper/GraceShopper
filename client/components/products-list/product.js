import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Product extends Component {

    
    handleClick(){
      let cart= this.props.addProductToCart(this.props.product, this.props.userId);
  
       // localStorage.setItem('cart', )
    }
  
    render() {
// const Product = ({ product, admin, removeProduct, addProductToCart, userId, history }) => {
  return (
    <div className="product-small">
      <Link to={admin ? `/admin/products/${product.id}` : `/products/${product.id}`}>
        <img className="product-image" src={product.imageURL} />
        <h2 className="product-name">{product.name}</h2>
        <p>${product.price}</p>
        {product.stock ? <p className="in-stock">In Stock</p> : <p className="out-of-stock">Out Of Stock</p>}
      </Link>
      <button type="button" onClick={() => {
        removeProduct(product.id)
      }}>Delete</button>
      {/* <button type="button" onClick={() => addProductToCart(product, userId)}>Add To Cart</button> */}
    </div>
  )

    }
}

    // return (

    //   <div className="product-small">
    //     <Link to={this.props.admin ? `/admin/products/${this.props.product.id}` : `/products/${this.props.product.id}`}>
    //       <img className="product-image" src={this.props.product.imageURL} />
    //       <h2 className="product-name">{this.props.product.name}</h2>
    //       <p>${this.props.product.price}</p>
    //       {this.props.product.stock ? <p className="in-stock">In Stock</p> : <p className="out-of-stock">Out Of Stock</p>}
    //     </Link>
    //     <button type="button" onClick={() => this.props.removeProduct(this.props.product.id)}>Delete</button>
    //     <button type="button" onClick={() => handleClick()}>Add To Cart</button>
    //   </div>

    // )