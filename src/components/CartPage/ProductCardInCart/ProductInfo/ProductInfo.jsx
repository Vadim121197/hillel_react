import React from "react";
import PropTypes from 'prop-types';

const ProductInfo = ({ summary, price, count, name }) => {
  return (
    <div className="textContent__cart">
      <div className="product__name">{name} </div>
      <div className="summary__product">
        {price} $ x {count} = {summary} $
      </div>
    </div>
  );
};


ProductInfo.propTypes = {
  summary: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired

}
export default ProductInfo;
