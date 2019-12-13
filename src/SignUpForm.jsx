import * as yup from 'yup';
import React from 'react';
import { Formik } from 'formik';
import './App.css';

const FormScheema = yup.object({
  firstName: yup.string().required('FirstName Required'),
  lastName: yup.string().required('LastName Required'),
  email: yup
    .string()
    .email()
    .required('Email Required'),
  password: yup
    .string()
    .min(6)
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password and ConfirmPassword must be same')
    .required('ConfirmPassword is required')
});

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
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          className=""
          type="text"
          placeholder="FirstName"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.firstName && touched.firstName && (
          <div style={{ color: 'red' }}>{errors.firstName}</div>
        )}
        <input
          type="text"
          placeholder="LastName"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.lastName && touched.lastName && (
          <div style={{ color: 'red' }}>{errors.lastName}</div>
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.email && touched.email && (
          <div style={{ color: 'red' }}>{errors.email}</div>
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.password && touched.password && (
          <div style={{ color: 'red' }}>{errors.password}</div>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.confirmPassword && touched.confirmPassword && (
          <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
        )}
        <div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
const SignUpForm = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={FormScheema}
    render={App}
  />
);

const comparePasswords1 = (touched, values) => {
  return touched.confirmPassword
    ? values.confirmPassword
      ? values.confirmPassword === values.password
        ? ''
        : 'Password And Confirm Password Must Be Same'
      : 'Confirm Password Required'
    : '';
};

export default SignUpForm;
