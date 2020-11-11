import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField, validate } from "../../../../helpers/helpers";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getForms } from "../../../../redux/selectors/formsSelector";
import { useHistory } from "react-router-dom";

const ChangeProductForm = ({ initialValues }) => {
  const history = useHistory();
  const form = useSelector((state) => getForms(state, "productsForm"));
  const { _id } = initialValues;
  
  const handleSave = (e) => {
    e.preventDefault();
    try {
      axios
        .put(`/api/products/${_id}`, { ...form.values })
        .then(() => history.push("/products"))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="formProduct">
        <Form.Group widths="equal">
          <Field name="name" label="Имя" type="text" component={renderField} />
          <Field
            name="price"
            label="Цена"
            type="text"
            component={renderField}
          />
          <Button type="submit" className="primary" onClick={handleSave}>
            Сохранить
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default reduxForm({
  form: "productsForm",
  validate,
})(ChangeProductForm);
