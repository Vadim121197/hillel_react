import React, { useMemo } from "react";
import PropTypes from "prop-types";

const SummaryPrice = ({ products }) => {
  let summary = useMemo(
    () =>
      products.reduce((acum, product) => {
        return acum + +product.foundProduct.price * product.count;
      }, 0),
    [products]
  );

  return <div className="textContent__summary">Summary : {summary} $</div>;
};

SummaryPrice.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SummaryPrice;
