import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, _id, price } = product;

  return (
    <>
      <tbody>
        <tr>
          <td>
            <NavLink to={`/products/${_id}`}>{name}</NavLink>
          </td>
          <td>{price}</td>
        </tr>
      </tbody>
    </>
  );
};

export default ProductCard;
