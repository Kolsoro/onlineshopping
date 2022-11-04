import React from "react";
import { useParams } from "react-router-dom";

const DetailsComponent=()=>{
    let {id , name , price} = useParams();
    return(
       <div>
           <h2>Product Details</h2>
           <dl>
            <dt>Id</dt>
            <dd>{id}</dd>
            <dt>Name</dt>
            <dd>{name}</dd>
            <dt>Price</dt>
            <dd>{price}</dd>
           </dl>
       </div>
    )
}
export default DetailsComponent;