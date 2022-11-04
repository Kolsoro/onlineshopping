import React from "react";
import $ from 'jquery';

export default class NasaMarsRowerComponent extends React.Component
{
        constructor(props){
            super(props);
            this.state={
                photos:[]
            }
        }

        componentDidMount(){
 //   when component did mount automatically it will set the data 
            this.fetch();
        }

        fetch(){
 // create a context memory , current class related members we will access using this
            var context=this;
             $.ajax({
                    url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY',
                    method:'GET',
// this entire url is returning an object that object is response 
                    success:function(response){
                       context.setState({
                        photos:response.photos
                       })
                    }
             })
        }
        render(){
            return(
                <div className="container">
                    <h2>Nasa Mars Rower Photos</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Sol[Days on Mars]</th>
                                <th>Photo Preview</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.photos.map(mars=>
                                    <tr>
                                        <td>{mars.id}</td>
                                        <td>{mars.sol}</td>
                                        <td>
                                            <img src={mars.img_src} alt={mars.id} width="300" height="200" />
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
}








