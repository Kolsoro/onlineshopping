import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductsComponent=()=>{
    let {id}=useParams();
    let products=[
        {Name:'Samsung TV',Price:45000.55,categoryId:1},
        {Name:'Earpods',Price:3400.44,categoryId:1},
        {Name:'Nike casuals',Price:6000.44,categoryId:2},
        {Name:'Lee Cooper boots',Price:5000.44,categoryId:2},
        {Name:'Shirt',Price:2300.44,categoryId:3}

    ]
    let result =products.filter(category=>category.categoryId==id);
    return(
        <div>
            <h2>Products List</h2>
            <table className="table table-hover">
              <thead> 
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                    result.map(product=>
                        <tr>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                        </tr>
                    )
                }
              </tbody>
            </table>
            <br/>
            <Link to="/categories">Back to categories</Link>
        </div>
    )
}
export default ProductsComponent;