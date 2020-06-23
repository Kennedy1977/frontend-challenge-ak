import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListing } from "./components/ProductListing/ProductListing";
import "./index.scss";

const addToBasket = (id) => {
  alert("Hey, thanks for adding Product ID #" + id + " to your basket!");
};

const init = () => {
  ReactDOM.render(
    <Router>
      <ProductListing addToBasket={addToBasket} />
    </Router>,
    document.getElementById("container")
  );
};

document.addEventListener("DOMContentLoaded", init);
