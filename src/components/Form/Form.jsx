import React from "react";
import { Formik, Field, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

import {
  Container,
  Label,
  WrrapField,
  WrrapForm,
  SelectForm,
  InputForm,
  ErrorWrrap,
  Option,
  TextArea,
} from "./Form.styled";
import Button from "../Button";
import category from "../../category.json";

const AddSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  content: Yup.string().required("Required"),
});

const FormComponent = ({
  onSubmit,
  oldDataNote = {
    name: "",
    category: "",
    content: "",
  },
}) => {
  const Select = (props) => <SelectForm {...props}></SelectForm>;
  const Input = (props) => <InputForm {...props}></InputForm>;
  return (
    <Container>
      <Formik
        initialValues={{
          name: oldDataNote.name,
          category: oldDataNote.category,
          content: oldDataNote.content,
        }}
        validationSchema={AddSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <WrrapForm>
              <WrrapField>
                <Label htmlFor="name">Name</Label>
                <Field id="name" name="name" as={Input} />
                {errors.name && touched.name ? (
                  <ErrorWrrap>{errors.name}</ErrorWrrap>
                ) : null}

                <Label htmlFor="category">Category</Label>
                <Field name="category" as={Select}>
                  <Option key={uuidv4()} value="" disabled>
                    {"Category..."}
                  </Option>
                  {category.map((elem) => (
                    <Option key={uuidv4()} value={elem}>
                      {elem}
                    </Option>
                  ))}
                </Field>
                {errors.category && touched.category ? (
                  <ErrorWrrap>{errors.category}</ErrorWrrap>
                ) : null}

                <Label htmlFor="content">Content</Label>
                <Field id="content" name="content" rows="5" as={TextArea} />
                {errors.content && touched.content ? (
                  <ErrorWrrap>{errors.content}</ErrorWrrap>
                ) : null}
              </WrrapField>
              <Button type="submit">Submit</Button>
            </WrrapForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormComponent;
