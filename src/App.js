import React from 'react';
import './style.css';
import * as yup from 'yup';
import axios from 'axios';
import { useState, useEffact } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Formik
        initialValues={{
          userid: '',
          password: '',
        }}
        validationSchema={yup.object({
          userid: yup.string().required('requred'),
          password: yup.string().required('required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          <Form>
            <dl>
              <dt>UserId</dt>
              <dd>
                <Field type="text" name="userid" />
              </dd>
              <dd style={{ color: 'red' }}>
                <ErrorMessage name="userid" />
              </dd>
              <dt>Password</dt>
              <dd>
                <Field type="password" name="password" />
              </dd>
              <dd style={{ color: 'red' }}>
                <ErrorMessage name="userid" />
              </dd>
              <button type="submit">Login</button>
            </dl>
          </Form>
        }
      </Formik>
    </div>
  );
}
