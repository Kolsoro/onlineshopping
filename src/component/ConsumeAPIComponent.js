import React from "react";
import axios from "axios";
import { useFormik } from "formik";

function RegisterComponent() {
    const formik = useFormik({
        initialValues: {
            id: 0,
            name: '',
            price: 0,
            stock: false
        },
        onSubmit: values => {
            axios.post('http://127.0.0.1:8080/addproduct', values);
            alert('Record Inserted')
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h3>Register Product</h3>
                <dl>
                    <dt>Product Id</dt>
                    <dd>
                        <input type="text" name="id" onChange={formik.handleChange} value={formik.values.id} className="form-control" />
                    </dd>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} className="form-control" />
                    </dd>
                    <dt>Price</dt>
                    <dd>
                        <input type="text" name="price" onChange={formik.handleChange} value={formik.values.price} className="form-control" />
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-check form-switch">
                        <input type="checkbox" name="stock" onChange={formik.handleChange} checked={formik.values.stock} className="form-check-input" />Yes
                    </dd>
                </dl>
                <div className="d-grid">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </>
    )
}

export default class ConsumeAPIComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        // this.componentDidMount=this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8080/getproducts')
            .then(response => {
                this.setState({
                    products: response.data
                })
            })
    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <h2 className="bg-primary text-white text-center mb-2 mt-2">Amazon Shopping</h2>
                    <div className="row">
                        <div className="col-3">
                            <RegisterComponent />
                        </div>
                        <div className="col-9">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product Id</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map(product =>
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{(product.stock == true) ? "Available" : "Out of stock"}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}