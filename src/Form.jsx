import React from "react"
import image1 from "./Image/grd3.jpg"
const Form=()=>{
    return(
        <>
        
        <div className="container">
        
        <input type="Name" placeholder="Your Name" /><br />
        <input type="password" placeholder="Enter Password"/><br />
        <input type="Email" placeholder="Your Email ID" />
        <img src={image1} width="400px" height="400px"/>
        </div>
        </>
    );
};

export default Form;