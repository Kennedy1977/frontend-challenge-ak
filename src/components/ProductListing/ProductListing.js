import React, { useState, useEffect } from "react";

export const ProductListing = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("./products.json")
      .then((results) => results.json())
      .then((data) => setData(data));
  }, []);

  console.log(data.items);

  return <h1>hello</h1>;
};
