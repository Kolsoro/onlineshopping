import React from "react";
import { Link } from "react-router-dom";

export default class NavBarComponent extends React.Component {
    render() {
        return (
            <div>
               <nav>
                 <ul className="list-unstyled">
                    <li className="d-grid mt-3">
                   <Link to="/home" className="btn btn-primary">Home</Link>
                    </li>
                    <li className="d-grid mt-3">
                    <Link to="/electronics" className="btn btn-primary">Electronics</Link>
                    </li>
                    <li className="d-grid mt-3">
                    <Link to="/footwear" className="btn btn-primary">Footwear</Link>
                    </li>
                    <li className="d-grid mt-3">
                    <Link to="/fashion" className="btn btn-primary">Fashion</Link>
                    </li>
                    <li className="d-grid mt-3">
                    <Link to="/categories" className="btn btn-primary">Get Categories</Link>
                    </li>
                 </ul>
               </nav>
            </div>
        )
    }
}