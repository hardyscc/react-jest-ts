import { Form, Formik, FormikActions } from "formik";
import React from "react";

interface IProps {
  onSubmit: (name: string) => void;
}

interface FormValues {
  name: string;
}

class InputArea extends React.Component<IProps> {
  render() {
    return (
      <Formik<FormValues>
        initialValues={{ name: "" }}
        onSubmit={this.handleSubmit}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <label htmlFor="name">name</label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    );
  }

  handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikActions<FormValues>
  ) => {
    if (values.name) {
      this.props.onSubmit(values.name);
      resetForm();
    }
    setSubmitting(false);
  };
}

export default InputArea;
