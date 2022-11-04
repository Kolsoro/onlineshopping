import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const ValidationComponent = () => {

    return (
        <Formik
            initialValues={
                {
                    Name: '',
                    Salary: '',
                    Email: ''
                }
            }
            validationSchema={
                yup.object({
                    Name: yup.string()
                        .required("Name is required")
                        .min(4, "Name too short")
                        .max(10, "Name too long"),
                    Salary: yup.number()
                        .required("Salary Required"),
                    Email: yup.string()
                        .required("Email required")
                        .email("Invalid Email")
                })
            }
            onSubmit={
                values => {
                    alert(JSON.stringify(values))
                }
            }
        >
            {
                props => (
                    <div className="container">
                        <h2>Register Form</h2>
                        <Form>
                            <dl>
                            <dt>Name</dt>
                            <dd>
                                <Field type="text" name="Name" ></Field>                           </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Name" ></ErrorMessage>
                            </dd>
                            <dt>Salary</dt>
                            <dd>
                                <Field type="text" name="Salary"></Field>                           </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Salary"></ErrorMessage>
                            </dd>
                            <dt>Email</dt>
                            <dd>
                                <Field type="text" name="Email" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Email"></ErrorMessage>
                            </dd>
                            <dt>City</dt>
                            <dd>   
                                {/* here if we use type instead of as we will get input danger error */}
                                <Field as="select" name="City">
                                    <option>Dehli</option>
                                    <option>Hyd</option>
                                </Field>
                            </dd>
                            </dl>
                            <button disabled={props.isValid==false }>Register</button>
                            <button disabled={props.dirty==false}>Save</button>
                        </Form>
                    </div>
                )
            }

        </Formik>
    )
}
export default ValidationComponent;