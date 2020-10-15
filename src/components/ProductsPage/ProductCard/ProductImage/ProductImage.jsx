import React from "react";

const ProductImage = ({image}) => {
  return (
    <div className="imageBox">
      <img src={image} alt="" />
    </div>
  );
};

export default ProductImage;
