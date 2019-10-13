/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import cart1 from "../assets/img/cart/1.jpg"

class Cart extends React.Component {
  render() {
    return (
      <ul className="cart-dropdown">
        <li className="single-product-cart">
          <div className="cart-img">
            <a href="#">
              <img src={cart1} alt="" />
            </a>
          </div>
          <div className="cart-title">
            <h5><a href="#"> Bits Headphone</a></h5>
            <h6><a href="#">Black</a></h6>
            <span>$80.00 x 1</span>
          </div>
          <div className="cart-delete">
            <a href="#"><i className="ti-trash"></i></a>
          </div>
        </li>
        <li className="cart-space">
          <div className="cart-sub">
            <h4>Subtotal</h4>
          </div>
          <div className="cart-price">
            <h4>$240.00</h4>
          </div>
        </li>
        <li className="cart-btn-wrapper">
          <a className="cart-btn btn-hover" href="#">view cart</a>
          <a className="cart-btn btn-hover" href="#">checkout</a>
        </li>
      </ul>
    )
  }
}

export default Cart