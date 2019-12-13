import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

import TextField from '@material-ui/core/TextField';


import * as yup from 'yup';
const App = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="email"
        placeholder="Email"
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email}
        helperText={errors.email}
      />

      <br />
      <TextField
        type="password"
        placeholder="Password"
        id="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password && touched.password}
        helperText={errors.password}
      />
      <br />
      <div style={{ margin: 5 }}>
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
          Submit
      </Button>
      </div>

    </form >
  );
};

const FormScheema = yup.object({
  email: yup
    .string()
    .email('Not Valid')
    .required('Email Required'),
  password: yup
    .string()
    .min(6)
    .required("Password Required")
});

const LoginForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm({ email: '', password: '' });
      }, 500);
    }}
    validationSchema={FormScheema}
    render={App}
  />
);

export default LoginForm;
