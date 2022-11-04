import React from 'react'
import { Formik, useFormik } from 'formik'

const FormikDemoComponent = () => {

    const formik = useFormik({
        initialValues: {
            Name: 'TV',
            Price: 0,
            ShippedTo: 'Hyd',
            InStock: true
        },
        onSubmit: values => {
            document.write(`
            <h2>Product Details</h2>
            <table border="1" width="400">
            <tr>
            <th>Name</th>
            <td>${values.Name}</td>
            </tr>
            <tr>
            <th>Price</th>
            <td>${values.Price}</td>
            </tr>
            <tr>
            <th>ShippedTo</th>
            <td>${values.ShippedTo}</td>
            </tr>
            <tr>
            <th>Stock</th>
            <td>${(values.InStock) ? "Available" : "Out of Stock"}</td>
            </tr>
            </table>   
            `)
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='container' >
                    <h3>Register Product</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={formik.handleChange} name='Name' className='form-control' value={formik.values.Name} /> </dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={formik.handleChange} name='Price' className='form-control' value={formik.values.Price} /></dd>
                        <dt>ShippedTo</dt>
                        <dd>
                            <select name='ShippedTo' className='form-select' onChange={formik.handleChange} value={formik.values.ShippedTo}>
                                <option>Delhi</option>
                                <option>Hyd</option>
                            </select>
                        </dd>
                        <dt>InStock</dt>
                        <dd className='form-check form-switch'>
                            <input name='InStock' type='checkbox' onChange={formik.handleChange} checked={formik.values.InStock} className='form-check-input ' />
                            <label> Yes </label>
                        </dd>
                    </dl>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Register</button>
                    </div>
                </div>

            </form>
        </>
    )
}
export default FormikDemoComponent;