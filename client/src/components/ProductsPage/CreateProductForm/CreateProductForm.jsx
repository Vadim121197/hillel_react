import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { renderField } from "../../../helpers/helpers";
import { Button, Form } from "semantic-ui-react";

const CreateProductForm = () => {
  return (
    <Form>
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

export default  reduxForm({
    form: "productsForm",
  }) (CreateProductForm);
