import { useFormik } from "formik";
import React from "react";

const ValidateFormData = (props) => {
    const errors = {
        Name: '',
        Price: '',
        Code: ''
    }

    if (!props.Name) {
        errors.Name = "Product Name Required"
    }else if(props.Name.length<4){
        errors.Name="Name is too short"
    }
    if (!props.Price) {
        errors.Price = "Price Required"
    }
    if (!props.Code) {
        errors.Code = "Product Code Manadatory"
    }else if(!/[A-Z]{3}[0-9]{2}/.test(props.Code)){
        errors.Code="Invalid code - Please match requested pattern "
    }

    return errors;

}

const FormValidationComponent = () => {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Price: '',
            Code: ''
        },
        // validate is a function that is used to validate these values 
        // we specify here what kind of validations we will use 
        // validate function will return the errors 
        validate: ValidateFormData,
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <>
            <h2>RegisterProduct</h2>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>Name</dt>
                        <dd>
                            <input type="text" className="form-control" name="Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Name} />
                        </dd>
                        <dd className="text-danger">
                            {(formik.touched.Name && formik.errors.Name) ? formik.errors.Name : null}
                        </dd>
                        <dt>Price</dt>
                        <dd>
                            <input type="text" className="form-control" name="Price" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Price} />
                        </dd>
                        <dd className="text-danger">
                            {(formik.touched.Price && formik.errors.Price) ? formik.errors.Price : null}
                        </dd>
                        <dt>Code</dt>
                        <dd>
                            <input type="text" className="form-control" name="Code" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Code} />
                        </dd>
                        <dd className="text-danger">
                            {(formik.touched.Code && formik.errors.Code) ? formik.errors.Code : null}
                        </dd>
                    </dl>
                    <div className="d-grid">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default FormValidationComponent;

