import React from "react";
import "./ProductsPage.css";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const { productList } = useSelector((state) => state.products);
 
  return (
    <div className="products__wrapper">
      {productList.map((product) => {
        return (
          <ProductCard
            alt=""
            src={product.image}
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductsPage;
