import React from "react";
import "./ProductsPage.css";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

const ProductsPage = () => {

  const products = useSelector((state) => state.products.productList);
  
  return (
    <div className="products__wrapper">
      {products.map((product) => {
        return (
          <ProductCard
            src={product.image}
            key={product.id}
            id={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductsPage;
