import React from "react";
import { Link } from "react-router-dom";
import "./ProductTile.scss";

export const ProductTile = (props) => {
  //  * If there are more than 20 of an item in stock, use the messaging "20+ in stock"
  // * If there are less than 5 of an item in stock, use the messaging "Less than 5 left, order yours now"
  // * If there are no items in stock, use the messaging "Out of stock right now"
  // * If an item can be delivered tomorrow, use the messaging "Order now, get it tomorrow" - otherwise show an estimated delivery date.

  let stockMessage = `${props.item.stock} in stock`;

  if (props.item.stock > 20) {
    stockMessage = "20+ in stock";
  }
  if (props.item.stock < 5) {
    stockMessage = "Less than 5 left, order yours now";
  }
  if (props.item.stock === 0) {
    stockMessage = "Out of stock right now";
  }

  const handleClick = () => {
    props.addToBasket(props.item.id);
  };

  return (
    <section className="productTile">
      <Link to={`/products/${props.item.code}`}>
        <img src={props.item.image} alt="" />
        <p className="productTile__title">{props.item.title}</p>
        <p>&pound;{props.item.price}</p>
        <p>{stockMessage}</p>
        <p>Delivery estimate: {props.item.delivery_estimate}</p>
      </Link>
      <button onClick={handleClick}>add to basket</button>
    </section>
  );
};
