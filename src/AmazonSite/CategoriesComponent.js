import React from "react";
import { Link } from "react-router-dom";

const CategoriesComponent = () => {
    let categories = [
        { CategoryId: 1, CategoryName: 'Electronics' },
        { CategoryId: 2, CategoryName: 'Footwear' },
        { CategoryId: 3, CategoryName: 'Fashion' }
    ]
    return (
        <div>
            <h2>Categories List</h2>
            <ul>
                {
                    categories.map(category =>
                        <li key={categories.CategoryId}>
                            <Link to={'/products/'+category.CategoryId}>{category.CategoryName}</Link>
                        </li>
                    ) 
                }
            </ul>
        </div>
    )
}
export default CategoriesComponent