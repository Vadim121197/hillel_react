import React from "react";
import { Header, Table } from "semantic-ui-react";

const ProductCard = ({ product }) => {
  const { name, _id, price } = product;
  return (
    <>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{price}</td>

          <td>
            <button>Change</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ProductCard;
