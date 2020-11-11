import axios from "axios";
import { Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import ChangeProductForm from "./ChangeProductForm/ChangeProductForm";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [isChangeClicked, setIsChangeClicked] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    try {
      axios
        .get(`/api/products/${id}`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handlerRemove = (e) => {
    e.preventDefault();
    try {
      axios
        .delete(`/api/products/${id}`)
        .then((response) => setProduct(response.data))
        .then(() => history.push("/products"))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Цена</th>
          </tr>
        </thead>
        <ProductCard product={product} />
      </table>
      <Button className="primary" onClick={handlerRemove}>
        Удалить
      </Button>
      <Button className="secondary" onClick={() => setIsChangeClicked(true)}>
        Изменить
      </Button>
      {!isChangeClicked || <ChangeProductForm initialValues={product} />}
    </>
  );
};

export default ProductPage;
