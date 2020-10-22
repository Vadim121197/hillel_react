import React from 'react'
import PropTypes from 'prop-types';

const ProductImageInCart = ({image}) => {
    return (
        <div className="imageBox__cart">
        <img src={image} alt="" />
      </div>
    )
}

ProductImageInCart.propTypes = {
  image: PropTypes.string.isRequired
}

export default ProductImageInCart
