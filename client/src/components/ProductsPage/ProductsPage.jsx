import React, { useCallback, useEffect, useState } from "react";
import { Field, reduxForm, reset } from "redux-form";
import { renderField } from "../../helpers/helpers";
import { Button, Form } from "semantic-ui-react";
import CreateProductForm from "./CreateProductForm/CreateProductForm";
import axios from "axios";
import ProductCard from "./ProductCard/ProductCard";
import { Header, Image, Table } from "semantic-ui-react";

const ProductsPage = () => {
  const [isCreateBtnClicked, setIsCreateBtnClicked] = useState(false);
  const [products, setProducts] = useState([]);

  const axiosData = useCallback(() => {
    try {
      axios
        .get("/api/products")
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </table>
      <Button
        className="primary"
        onClick={() => setIsCreateBtnClicked(!isCreateBtnClicked)}
      >
        Create product
      </Button>
      {isCreateBtnClicked ? <CreateProductForm /> : null}
    </>
  );
};

export default ProductsPage;
