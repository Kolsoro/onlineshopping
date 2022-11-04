import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes, useParams, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {PropTypes , propTypes} from 'prop-types';

const Product = (props) => {
    return (
        <dl>
            <dt>Products Code</dt>
            <dd>{props.code}</dd>
            <dt>Name</dt>
            <dd>{props.name}</dd>
            <dt>Type</dt>
            <dd>{props.type}</dd>
            <dt>Shipped to</dt>
            <dd>
                <ul>
                    {
                        props.shippedTo.map(val => {
                            return (
                                <li key={val}>{val}</li>
                            )
                        })
                    }
                </ul>
            </dd>
        </dl>
    )
}
Product.propTypes={
    name:PropTypes.string,
    price:PropTypes.number,
    // Combination of 2 types like string & number
    code:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    shippedTo:PropTypes.arrayOf(PropTypes.string)
}



class CategoriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8080/getcategories')
            .then(res => {
                this.setState({
                    categories: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <h3>Categories</h3>
                <ol>
                    {
                        this.state.categories.map(category =>
                            <li key={category.CategoryId}>
                                <Link to={"/products/" + category.CategoryId}>{category.CategoryName}</Link>
                            </li>)
                    }
                </ol>
            </div>
        )
    }
}

const DetailsComponent = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/getproduct/${id}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [])
    return (
        <div>
            <div>
                <Product code={1020} name={'TV'} price={19999.87} shippedTo={['Dehli','Hyd']}/>
            </div>
            <h3>Product Details</h3>
            <dl>
                {
                    product.map(item =>
                        <>
                            <dt>Name</dt>
                            <dd>{item.Name}</dd>
                            <dt>Price</dt>
                            <dd>{item.Price}</dd>
                            <dt>Product Id</dt>
                            <dd>{item.ProductId}</dd>
                            <Link to={"/products/" + item.CategoryId}>Back to Products</Link>
                        </>

                    )
                }

            </dl>
        </div>
    )
}

const HomeComponent = () => {
    return (
        <div>
            <h2>Amazon Home - Online Shopping </h2>
        </div>
    )
}




const RegisterComponent = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/getcategories`)
            .then(res => {
                setCategories(res.data);
            });
    }, [])

    const formik = useFormik({
        initialValues: {
            ProductId: 0,
            Name: '',
            Price: 0,
            CategoryId: 1
        },
        onSubmit: values => {
            axios.post('http://127.0.0.1:8080/addproduct', values);
            alert('Record Inserted');
            navigate('/categories')
        }
    });



    return (
        <div className="w-75">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register Product</h3>
                <dl>
                    <dt>Product Id</dt>
                    <dd>
                        <input type="text" className="form-control" name="ProductId" onChange={formik.handleChange} value={formik.values.ProductId} />
                    </dd>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" name="Name" onChange={formik.handleChange} value={formik.values.Name} className="form-control" />
                    </dd>
                    <dt>Price</dt>
                    <dd>
                        <input type="text" name="Price" onChange={formik.handleChange} value={formik.values.Price} className="form-control" />
                    </dd>
                    <dt>Category</dt>
                    <dd>
                        <select className="form-select" name="CategoryId" onChange={formik.handleChange} value={formik.values.CategoryId} >
                            {
                                categories.map(category =>
                                    <option key={category.CategoryId} value={category.CategoryId}>
                                        {category.CategoryName}
                                    </option>
                                )
                            }
                        </select>
                    </dd>
                </dl>
                <div>
                    <button className="btn btn-primary" >Add Product</button>
                </div>
            </form>
        </div>
    )
}

const ProductComponent = () => {
    const { id } = useParams();
    // now we have to create a state & in that we have to collect the data & store
    // here useState is a hook & we have to tell what kind of data it return , so we have 
    // to configure that as an array type , so here product will be initialize as an array 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/getproducts/${id}`)
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    return (
        <div>
            <h3>Product List</h3>
            <ol>
                {
                    products.map(product =>
                        <li key={product.ProductId}>
                            <Link to={"/details/" + product.ProductId}>{product.Name}</Link>
                        </li>
                    )
                }
            </ol>
            <div>
                <Link to="/categories">Back to Categories</Link>
            </div>
        </div>
    )

}


export default class IndexComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Router>
                    <header className="bg-danger text-white text-center p-2 mt-2">
                        <h1><span className="bi bi-cart4"></span>Amazon Shopping</h1>
                    </header>
                    <div className="row mt-2">
                        <div className="col-3">
                            <div className="mt-2 d-grid">
                                <Link className="btn btn-danger" to="/home">Home</Link>
                            </div>
                            <div className="mt-2 d-grid">
                                <Link className="btn btn-danger" to="/categories">Categories</Link>
                            </div>
                            <div className="mt-2 d-grid">
                                <Link className="btn btn-danger" to="/register">Add Products</Link>
                            </div>

                        </div>
                        <div className="col-9">
                            <Routes>
                                <Route path="/" element={<HomeComponent />} />
                                <Route path="/categories" element={<CategoriesComponent />} />
                                <Route path="/products/:id" element={<ProductComponent />} />
                                <Route path="/details/:id" element={<DetailsComponent />} />
                                <Route path="/home" element={<Navigate to="/" replace={true} />} />
                                <Route path="/register" element={<RegisterComponent />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}