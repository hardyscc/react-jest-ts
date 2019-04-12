import { Form, Formik, FormikActions } from "formik";
import React from "react";

interface IProps {
  onSubmit: (name: string) => void;
}

interface FormValues {
  text: string;
}

class InputArea extends React.Component<IProps> {
  render() {
    return (
      <Formik<FormValues>
        initialValues={{ text: "" }}
        onSubmit={this.handleSubmit}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <label htmlFor="text">Beer</label>
            <input
              id="text"
              name="text"
              value={values.text}
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
    { setSubmitting }: FormikActions<FormValues>
  ) => {
    if (values.text) {
      this.props.onSubmit(values.text);
    }
    setSubmitting(false);
  };
}

export default InputArea;
