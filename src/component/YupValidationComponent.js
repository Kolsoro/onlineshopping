import { Formik, useFormik } from "formik";
import React from "react";
import * as yup from 'yup';

const YupValidationComponent = () => {

    const formik = useFormik({
        initialValues: {
            Name: '',
            Salary: '',
            Email: ''
        },
        validationSchema: yup.object({
            Name: yup.string()
                .required("User Name Required")
                .min(4, "Name too short..")
                .max(10, "Name too long.."),
            Salary: yup.number()
                .required('salary required'),
            Email: yup.string()
                .email("Invalid Email")
                .required()
        }),
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <>
            <div>
                <h2>Register User</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control" name="Name" {...formik.getFieldProps("Name")} /></dd>
                        <dd className="text-danger">{(formik.touched.Name && formik.errors.Name) ? formik.errors.Name : null}</dd>
                       
                        <dt>Salary</dt>
                        <dd><input type="text" className="form-control" name="Salary" {...formik.getFieldProps("Salary")} /></dd>
                        <dd className="text-danger">{(formik.touched.Salary && formik.errors.Salary) ? formik.errors.Salary : null}</dd>
                        
                        <dt>Email</dt>
                        <dd><input type="text" className="form-control" name="Email" {...formik.getFieldProps("Email")} /></dd>
                        <dd className="text-danger">{(formik.touched.Email && formik.errors.Email) ? formik.errors.Email : null}</dd>
                    </dl>
                    <div className="d-grid">
                        <button className="btn btn-primary">Register</button>
                    </div>

                </form>
            </div>
        </>
    )


}
export default YupValidationComponent;