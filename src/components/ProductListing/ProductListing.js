import React, { useState, useEffect } from "react";
import { ProductTile } from "../ProductTile/ProductTile";

export const ProductListing = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((results) => results.json())
      .then((data) => setData(data.items));
  }, []);

  console.log(data);

  return data.map((item, key) => (
    <ProductTile item={item} key={key} addToBasket={props.addToBasket} />
  ));
};
