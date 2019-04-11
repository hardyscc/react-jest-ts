import { Form, Formik } from "formik";
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
            <input
              name="text"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
            {isSubmitting && <div id="submitting">Submitting</div>}
          </Form>
        )}
      </Formik>
    );
  }

  handleSubmit = (values: FormValues) => {
    this.props.onSubmit(values.text);
  };
}

export default InputArea;
