import React, { useCallback, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import ProductCard from "./ProductCard/ProductCard";
import { useHistory } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const axiosData = useCallback(() => {
    try {
      axios
        .get("/api/products")
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    axiosData();
  }, []);

  const handlerAddBtn = (e) => {
    e.preventDefault();
    history.push("/products/creators-products");
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
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </table>
      <Button className="primary" onClick={handlerAddBtn}>
        Добавить
      </Button>
    </>
  );
};

export default ProductsPage;
