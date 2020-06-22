import React from 'react';
import ReactDOM from 'react-dom';
import ProductListing from './ProductListing';
import './index.scss';

const addToBasket = (id) => {
  alert('Hey, thanks for adding Product ID #' + id + ' to your basket!');
};

const init = () => {
  const listingsPage = document.getElementById('container');

  if (listingsPage) {
      ReactDOM.render(<ProductListing addToBasket={addToBasket} />, listingsPage);
  }
};

document.addEventListener('DOMContentLoaded', init);