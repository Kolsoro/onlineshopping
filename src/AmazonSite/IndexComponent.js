import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import CategoriesComponent from "./CategoriesComponent";
import DetailsComponent from "./DetailsComponent";
import ElectronicsComponent from "./ElectronicsComponent";
import FashionComponent from "./FashionComponent";
import FooterComponent from "./FooterComponent";
import FootwearComponent from "./FootwearComponent";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import NavBarComponent from "./NavBarComponent";
import ProductsComponent from "./ProductsComponent";

export default class IndexComponent extends React.Component {
    render() {
        return (
            <Router>
                <HeaderComponent />
                <div className="row" style={{height:"400px"}}>
                    <div className="col-3">
                        <NavBarComponent />
                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route path="/" element={<HomeComponent />} />
                            <Route path="/home" element={<Navigate to="/" replace={true} />} />
                            <Route path="/electronics" element={<ElectronicsComponent />} />
                            <Route path="/footwear" element={<FootwearComponent />} />
                            <Route path="/fashion" element={<FashionComponent />} />
                            <Route path="/details/:id/:name/:price" element={<DetailsComponent />} />
                            <Route path="/categories" element={<CategoriesComponent /> } />
                            <Route path="/products/:id" element={<ProductsComponent /> } />                            
                        </Routes>
                    </div>
                </div>
                <FooterComponent />
            </Router>
        )
    }
}