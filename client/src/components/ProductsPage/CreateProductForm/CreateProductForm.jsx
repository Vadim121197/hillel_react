import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { renderField } from "../../../helpers/helpers";
import { Button, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getFormValues } from "../../../redux/selectors/formsSelector";
import axios from "axios";

const CreateProductForm = () => {
  const formValues = useSelector((state) => state.form["productsForm"]);

  const dispatch = useDispatch();

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/api/products", { ...formValues.values })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }

    dispatch(reset("productsForm"));
  };
  console.log(formValues);
  return (
    <Form onSubmit={addHandler}>
      <Form.Group widths="equal">
        <Field name="name" label="Name" type="text" component={renderField} />
        <Field name="price" label="Price" type="text" component={renderField} />
        <Button type="submit" className="primary">
          Add
        </Button>
      </Form.Group>
    </Form>
  );
};

export default reduxForm({
  form: "productsForm",
})(CreateProductForm);
