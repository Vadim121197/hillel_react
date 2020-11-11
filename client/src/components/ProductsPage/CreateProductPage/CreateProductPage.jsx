import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { renderField, validate } from "../../../helpers/helpers";
import { Button, Form } from "semantic-ui-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { getForms } from "../../../redux/selectors/formsSelector";
import { useHistory } from "react-router-dom";
import "./CreateProductPage.css";

const CreateProductPage = () => {
  const [alert, setAlert] = useState("");
  const history = useHistory();
  const form = useSelector((state) => getForms(state, "productsForm"));

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/api/products", { ...form.values })
        .then((res) => {
          if (res.status === 400 || res.data.message) {
            setAlert(res.data.message);
            return;
          }
          history.push("/products");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Новый продукт</h2>
      <Form className="formProduct" onSubmit={addHandler}>
        <Form.Group widths="equal">
          <Field name="name" label="Имя" type="text" component={renderField} />
          <Field
            name="price"
            label="Цена"
            type="text"
            component={renderField}
          />
          <Button type="submit" className="primary">
            Добавить
          </Button>
        </Form.Group>
      </Form>
      <h4>{alert}</h4>
    </>
  );
};

export default reduxForm({
  form: "productsForm",
  validate,
})(CreateProductPage);
