import React, { useState, useEffect } from "react";
import { ProductTile } from "../ProductTile/ProductTile";

export const ProductListing = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("./products.json")
      .then((results) => results.json())
      .then((data) => setData(data));
  }, []);

  console.log(data.items);

  // const productSet = data.items.map((item) => {
  //   if (item.stock > 20) {
  //     return <Product key={data.Reference} data={data} />;
  //   }
  // });

  return (
    <>
      <ProductTile />
    </>
  );
};
