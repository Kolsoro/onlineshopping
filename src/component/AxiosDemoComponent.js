import React from "react";
import axios from "axios";

export default class AxiosDemoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
            .then(response => {
                this.setState({
                    photos: response.data.photos
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h2>Nasa Mars Rower Photos - Axios</h2>
                <div className="card-group flex-column">
                    {
                        this.state.photos.map(mars =>
                            <div className="card mt-3 w-25 bg-danger" key={mars.id} >
                                <img src={mars.img_src} alt={mars.id} height="200" className="card-image-top" />
                                <div className="card-header text-white">
                                    <h3>{mars.id}</h3>
                                    <p>{mars.sol}</p>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        )
    }
}