import React from "react";

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="mt-2 bg-primary text-white text-center">
                <h1><span className="bi bi-cart4"></span>Amazon Shopping</h1>
            </div>
        )
    }
}