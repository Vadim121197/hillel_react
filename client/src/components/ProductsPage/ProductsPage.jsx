import React, { useState } from "react";
import { Field, reduxForm, reset } from "redux-form";
import { renderField } from "../../helpers/helpers";
import { Button, Form } from "semantic-ui-react";
import CreateProductForm from "./CreateProductForm/CreateProductForm";

const ProductsPage = () => {
  const [isCreateBtnClicked, setIsCreateBtnClicked] = useState(false);

  return (
    <>
      <Button className="primary" onClick={() => setIsCreateBtnClicked(!isCreateBtnClicked)}>
        Create product
      </Button>
      {isCreateBtnClicked ? <CreateProductForm /> : null}
    </>
  );
};

export default ProductsPage;
