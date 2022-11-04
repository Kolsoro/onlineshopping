import React from "react";
//  It is mandatory to metion that this router is a browser router
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";

const HomeComponent = () => (
    <>
        <h2>Amazon Home</h2>
        <p>Online shopping</p>
    </>
)

const ContactComponent = () => (
    <>
        <h2>Contact us</h2>
        <p>help@amazon.in</p>
    </>
)

const NotFoundComponent = () => {
    return (
        <>
            <h2>Page you requested <code>{window.location.href}</code> Not Found</h2>
        </>
    )
}

export default class AppHomeComponent extends React.Component {

    render() {
        return (<div className="container-fluid mt-3">
            <Router>
                <header>
                    <span><Link to="/home">Home</Link></span>
                    <span>|</span>
                    <span><Link to="/contact">Contact</Link></span>
                    <span>|</span>
                    <span><Link to="/login">Login</Link></span>
                </header>
                <hr />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/home" element={<Navigate to="/" replace={true} />}></Route>
                    <Route path="/contact" element={<ContactComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="*" element={<NotFoundComponent />} />
                </Routes>
            </Router>
        </div>
        )
    }
}