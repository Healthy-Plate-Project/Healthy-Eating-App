import React from "react";
import empty from "./../../assets/images/empty-plate-pexels-daniela-constantini-5720778.jpg";

const NotFound = () => {
return(
    <div>
        <h1>404 not found. </h1>
        <h3>Oops! This plate is empty. Start your search back at home.</h3>
        <img src={empty} height="700px" />
    </div>
)
};

export default NotFound;