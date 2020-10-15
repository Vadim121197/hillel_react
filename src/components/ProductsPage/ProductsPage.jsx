import React from "react";
import "./ProductsPage.css";
import { products } from "../../data/products";
import ProductCard from "./ProductCard/ProductCard";

const ProductsPage = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => {
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
