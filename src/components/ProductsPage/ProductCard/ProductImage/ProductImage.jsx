import React from "react";
import PropTypes from "prop-types";

const ProductImage = ({ image }) => {
  return (
    <div className="imageBox">
      <img src={image} alt="" />
    </div>
  );
};

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
};
export default ProductImage;
